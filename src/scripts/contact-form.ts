/*
 * Progressive enhancement for the contact form: without JS it posts natively
 * to the form service, which shows its own confirmation page. With JS we
 * validate inline, submit with fetch and report in a live region.
 */
import {
  contactFields,
  contactLimits,
  validateContact,
  type ContactErrorCode,
  type ContactField,
  type FormServiceError,
} from '@/lib/contact';

type Messages = Record<ContactErrorCode | 'sending' | 'sent' | 'failed', string>;

const form = document.querySelector<HTMLFormElement>('[data-contact-form]');

if (form) {
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const control = (field: ContactField) => form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
  const touched = new Set<ContactField>();

  // Our messages replace the browser's generic validation bubbles.
  form.noValidate = true;

  const errorText = (field: ContactField, code: ContactErrorCode) =>
    messages[code].replace('{min}', String(contactLimits[field].min)).replace('{max}', String(contactLimits[field].max));

  const showErrors = (errors: Partial<Record<ContactField, ContactErrorCode>>, fields: readonly ContactField[]) => {
    for (const field of fields) {
      const code = errors[field];
      const input = control(field);
      const slot = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`)!;
      input.setAttribute('aria-invalid', String(Boolean(code)));
      slot.textContent = code ? errorText(field, code) : '';
    }
  };

  const currentValues = () => Object.fromEntries(contactFields.map((f) => [f, control(f).value]));

  // Full class names so Tailwind's scanner generates them.
  const tones = { muted: 'text-muted', success: 'text-success', danger: 'text-danger' };
  const setStatus = (text: string, tone: keyof typeof tones) => {
    status.textContent = text;
    status.classList.remove(...Object.values(tones));
    status.classList.add(tones[tone]);
  };

  // Validate a field once the user leaves it, then live while they fix it.
  for (const field of contactFields) {
    const input = control(field);
    input.addEventListener('blur', () => {
      if (!input.value) return;
      touched.add(field);
      const result = validateContact(currentValues());
      showErrors(result.ok ? {} : result.errors, [field]);
    });
    input.addEventListener('input', () => {
      if (!touched.has(field)) return;
      const result = validateContact(currentValues());
      showErrors(result.ok ? {} : result.errors, [field]);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const result = validateContact(currentValues());
    if (!result.ok) {
      contactFields.forEach((f) => touched.add(f));
      showErrors(result.errors, contactFields);
      const first = contactFields.find((f) => result.errors[f]);
      if (first) control(first).focus();
      return;
    }
    showErrors({}, contactFields);

    if (form.dataset.configured !== 'true') {
      setStatus(messages.failed, 'danger');
      return;
    }

    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    submit.textContent = messages.sending;
    setStatus('', 'muted');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        touched.clear();
        setStatus(messages.sent, 'success');
      } else {
        // The service may still reject a field our rules accepted (e.g. an email it can't deliver to).
        const body = (await response.json().catch(() => ({}))) as FormServiceError;
        const rejected = (body.errors ?? [])
          .map((error) => error.field)
          .filter((field): field is ContactField => contactFields.includes(field as ContactField));
        if (rejected.length > 0) {
          showErrors(Object.fromEntries(rejected.map((field) => [field, 'invalid'])), rejected);
          control(rejected[0]).focus();
        } else {
          setStatus(messages.failed, 'danger');
        }
      }
    } catch {
      setStatus(messages.failed, 'danger');
    } finally {
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      submit.textContent = submit.dataset.label ?? '';
    }
  });
}
