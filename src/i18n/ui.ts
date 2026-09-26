import type { Localized } from '@/types/content';
import type { Locale } from './config';

/** Interface copy (labels, buttons, messages). Portfolio content lives in src/data/. */
export const ui = {
  'a11y.skip': {
    es: 'Saltar al contenido',
    en: 'Skip to content',
    ro: 'Sari la conținut',
  },
  'a11y.language': {
    es: 'Idioma',
    en: 'Language',
    ro: 'Limbă',
  },
  'nav.label': {
    es: 'Principal',
    en: 'Main',
    ro: 'Principal',
  },
  'nav.about': { es: 'Sobre mí', en: 'About', ro: 'Despre mine' },
  'nav.skills': { es: 'Stack', en: 'Stack', ro: 'Stack' },
  'nav.projects': { es: 'Proyectos', en: 'Work', ro: 'Proiecte' },
  'nav.experience': { es: 'Experiencia', en: 'Experience', ro: 'Experiență' },
  'nav.contact': { es: 'Contacto', en: 'Contact', ro: 'Contact' },
  'nav.cta': { es: 'Escríbeme', en: 'Get in touch', ro: 'Scrie-mi' },
  'nav.open': { es: 'Abrir menú', en: 'Open menu', ro: 'Deschide meniul' },
  'nav.close': { es: 'Cerrar menú', en: 'Close menu', ro: 'Închide meniul' },
  'nav.menu': { es: 'Menú', en: 'Menu', ro: 'Meniu' },

  'hero.cta': { es: 'Ver proyectos', en: 'See my work', ro: 'Vezi proiectele' },
  'hero.cv': { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)', ro: 'Descarcă CV-ul (PDF)' },
  'hero.clients': {
    es: 'He desarrollado software para',
    en: 'I have built software for',
    ro: 'Am dezvoltat software pentru',
  },
  'hero.portraitAlt': {
    es: 'Samuel Isip, con las gafas sobre la cabeza y un polo blanco',
    en: 'Samuel Isip with glasses pushed up, wearing a white polo shirt',
    ro: 'Samuel Isip, cu ochelarii ridicați pe cap, purtând un tricou polo alb',
  },

  'about.title': { es: 'Sobre mí', en: 'About', ro: 'Despre mine' },
  'about.location': { es: 'Vivo en', en: 'Based in', ro: 'Locuiesc în' },
  'about.experience': { es: 'Experiencia', en: 'Experience', ro: 'Experiență' },
  'about.years': { es: '{n} años', en: '{n} years', ro: '{n} ani' },
  'about.availability': { es: 'Disponibilidad', en: 'Availability', ro: 'Disponibilitate' },
  'about.languages': { es: 'Idiomas', en: 'Languages', ro: 'Limbi' },

  'skills.title': { es: 'Con qué trabajo', en: 'What I work with', ro: 'Cu ce lucrez' },
  'skills.intro': {
    es: 'Lo que uso en producción.',
    en: 'What I use in production.',
    ro: 'Ce folosesc în producție.',
  },

  'projects.title': { es: 'Proyectos', en: 'Selected work', ro: 'Proiecte' },
  'projects.intro': {
    es: 'Trabajo para clientes con acuerdos de confidencialidad, así que no hay capturas: cuento qué había que resolver, qué hice y qué cambió.',
    en: 'My client work is under NDA, so there are no screenshots: instead, what needed solving, what I did and what changed.',
    ro: 'Lucrez pentru clienți cu acorduri de confidențialitate, așa că nu există capturi: povestesc ce trebuia rezolvat, ce am făcut și ce s-a schimbat.',
  },
  'projects.problem': { es: 'El problema', en: 'The problem', ro: 'Problema' },
  'projects.work': { es: 'Qué hice', en: 'What I did', ro: 'Ce am făcut' },
  'projects.results': { es: 'Resultados', en: 'Results', ro: 'Rezultate' },
  'projects.stack': { es: 'Tecnologías', en: 'Technologies', ro: 'Tehnologii' },

  'experience.title': { es: 'Experiencia', en: 'Experience', ro: 'Experiență' },
  'experience.present': { es: 'actualidad', en: 'present', ro: 'prezent' },
  'experience.education': { es: 'Formación', en: 'Education', ro: 'Educație' },

  'contact.title': { es: 'Hablemos', en: 'Let’s talk', ro: 'Hai să vorbim' },
  'contact.intro': {
    es: 'Si tienes un puesto o un proyecto en el que encaje, cuéntamelo. Te respondo por email.',
    en: 'If you have a role or a project where I would fit, tell me about it. I will reply by email.',
    ro: 'Dacă ai un post sau un proiect în care m-aș potrivi, povestește-mi. Îți răspund pe email.',
  },
  'contact.direct': { es: 'O escríbeme directamente a', en: 'Or write to me directly at', ro: 'Sau scrie-mi direct la' },
  'contact.name': { es: 'Nombre', en: 'Name', ro: 'Nume' },
  'contact.email': { es: 'Email', en: 'Email', ro: 'Email' },
  'contact.message': { es: 'Mensaje', en: 'Message', ro: 'Mesaj' },
  'contact.messageHint': {
    es: 'El puesto o el proyecto, y cómo puedo ayudar.',
    en: 'The role or the project, and how I can help.',
    ro: 'Postul sau proiectul și cum te pot ajuta.',
  },
  'contact.submit': { es: 'Enviar mensaje', en: 'Send message', ro: 'Trimite mesajul' },
  'contact.sending': { es: 'Enviando…', en: 'Sending…', ro: 'Se trimite…' },
  'contact.sent': {
    es: 'Mensaje enviado. Te responderé a la dirección que has indicado.',
    en: 'Message sent. I will reply to the address you gave.',
    ro: 'Mesaj trimis. Îți voi răspunde la adresa indicată.',
  },
  'contact.failed': {
    es: 'No se ha podido enviar el mensaje. Vuelve a intentarlo o escríbeme a {email}.',
    en: 'The message could not be sent. Try again or email me at {email}.',
    ro: 'Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-mi la {email}.',
  },
  'contact.error.required': { es: 'Rellena este campo.', en: 'Fill in this field.', ro: 'Completează acest câmp.' },
  'contact.error.invalid': {
    es: 'Escribe un email con el formato nombre@dominio.com.',
    en: 'Enter an email like name@domain.com.',
    ro: 'Scrie un email de forma nume@domeniu.com.',
  },
  'contact.error.tooShort': {
    es: 'Escribe al menos {min} caracteres.',
    en: 'Write at least {min} characters.',
    ro: 'Scrie cel puțin {min} caractere.',
  },
  'contact.error.tooLong': {
    es: 'Acorta el texto a {max} caracteres como máximo.',
    en: 'Shorten this to {max} characters or fewer.',
    ro: 'Scurtează textul la cel mult {max} caractere.',
  },

  'footer.social': { es: 'Otros perfiles', en: 'Elsewhere', ro: 'Alte profiluri' },
  'footer.top': { es: 'Volver arriba', en: 'Back to top', ro: 'Înapoi sus' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

/** Returns a translator bound to one locale: `const t = useTranslations(locale); t('nav.about')`. */
export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[key][locale];
}

/** Picks the current language from any Localized value in src/data/. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
