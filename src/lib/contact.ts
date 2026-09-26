/*
 * Contact form rules. The form posts to a hosted form service (Formspree),
 * so this is the only validation we control: keep limits in sync with the markup.
 */
export const contactFields = ['name', 'email', 'message'] as const;
export type ContactField = (typeof contactFields)[number];
export type ContactErrorCode = 'required' | 'invalid' | 'tooShort' | 'tooLong';

export const contactLimits = {
  name: { min: 2, max: 100 },
  email: { min: 3, max: 254 },
  message: { min: 20, max: 5000 },
} satisfies Record<ContactField, { min: number; max: number }>;

export type ContactData = Record<ContactField, string>;

export type ContactValidation =
  | { ok: true; data: ContactData }
  | { ok: false; errors: Partial<Record<ContactField, ContactErrorCode>> };

// Deliberately loose: the real check is whether the reply arrives.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(raw: Partial<Record<ContactField, unknown>>): ContactValidation {
  const data = Object.fromEntries(
    contactFields.map((field) => [field, typeof raw[field] === 'string' ? raw[field].trim() : '']),
  ) as ContactData;

  const errors: Partial<Record<ContactField, ContactErrorCode>> = {};
  for (const field of contactFields) {
    const value = data[field];
    const { min, max } = contactLimits[field];
    if (!value) errors[field] = 'required';
    else if (value.length > max) errors[field] = 'tooLong';
    else if (value.length < min) errors[field] = field === 'email' ? 'invalid' : 'tooShort';
    else if (field === 'email' && !emailPattern.test(value)) errors[field] = 'invalid';
  }

  return Object.keys(errors).length === 0 ? { ok: true, data } : { ok: false, errors };
}

/** Formspree's honeypot field: submissions that fill it are silently discarded. */
export const honeypotField = '_gotcha';

/** Error body Formspree returns (422) when it rejects a field. */
export interface FormServiceError {
  errors?: { field?: string; code?: string; message?: string }[];
}
