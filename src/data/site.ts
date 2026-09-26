import type { Site } from '@/types/content';

export const site: Site = {
  name: 'Samuel Isip',
  fullName: 'Niculita Samuel Isip',
  role: {
    es: 'Desarrollador full stack',
    en: 'Full stack developer',
    ro: 'Dezvoltator full stack',
  },
  location: 'Tarancón, Cuenca',
  timeZone: 'Europe/Madrid',
  email: 'samuel.isip26@gmail.com',
  experienceYears: 6,

  headline: {
    es: 'Construyo y mantengo aplicaciones que la gente usa cada día en el trabajo: nóminas, pagos y herramientas internas. De la base de datos al despliegue.',
    en: 'I build and maintain the applications people rely on at work every day: payroll, payments and internal tools. From the database to the deployment.',
    ro: 'Construiesc și întrețin aplicațiile pe care oamenii le folosesc zilnic la muncă: salarizare, plăți și instrumente interne. De la baza de date până la deployment.',
  },

  about: {
    es: [
      'Llevo seis años como analista programador full stack, casi siempre en sistemas que ya están en producción y no pueden pararse. Me gusta ese trabajo: encontrar por qué algo es lento o se rompe, arreglarlo y dejarlo más fácil de mantener que como lo encontré.',
      'En Atresmedia he construido desde cero la aplicación de nóminas y datos de empleados: backend en Spring Boot y Spring Cloud, frontend en React, seguridad con Microsoft Entra ID y despliegue en GKE. Antes, en Serbatic, trabajé para Aena, Redsys y Atresmedia.',
      'Vivo en Tarancón (Cuenca). Hablo español y rumano como lenguas nativas, e inglés a nivel B2.',
    ],
    en: [
      'I have spent six years as a full stack developer, mostly on systems that are already in production and cannot stop. I like that work: finding out why something is slow or breaks, fixing it, and leaving it easier to maintain than I found it.',
      'At Atresmedia I built the payroll and employee data application from scratch: Spring Boot and Spring Cloud on the backend, React on the frontend, Microsoft Entra ID for security and GKE for deployment. Before that, at Serbatic, I worked for Aena, Redsys and Atresmedia.',
      'I live in Tarancón (Cuenca, Spain). Spanish and Romanian are my native languages, and my English is B2.',
    ],
    ro: [
      'Lucrez de șase ani ca dezvoltator full stack, mai ales pe sisteme care sunt deja în producție și nu se pot opri. Îmi place munca asta: să aflu de ce ceva merge încet sau se strică, să repar și să las codul mai ușor de întreținut decât l-am găsit.',
      'La Atresmedia am construit de la zero aplicația de salarizare și date ale angajaților: Spring Boot și Spring Cloud în backend, React în frontend, securitate cu Microsoft Entra ID și deployment pe GKE. Înainte, la Serbatic, am lucrat pentru Aena, Redsys și Atresmedia.',
      'Locuiesc în Tarancón (Cuenca, Spania). Spaniola și româna sunt limbile mele materne, iar engleza o vorbesc la nivel B2.',
    ],
  },

  availability: {
    es: 'Busco mi próximo puesto, en remoto.',
    en: 'Looking for my next role, remote.',
    ro: 'Îmi caut următorul post, remote.',
  },

  languages: {
    es: [
      { name: 'Español', level: 'nativo' },
      { name: 'Rumano', level: 'nativo' },
      { name: 'Inglés', level: 'B2' },
    ],
    en: [
      { name: 'Spanish', level: 'native' },
      { name: 'Romanian', level: 'native' },
      { name: 'English', level: 'B2' },
    ],
    ro: [
      { name: 'Spaniolă', level: 'nativ' },
      { name: 'Română', level: 'nativ' },
      { name: 'Engleză', level: 'B2' },
    ],
  },

  clients: ['Atresmedia', 'Redsys', 'Aena'],

  // Only a Spanish CV exists for now; the link says so in other languages.
  cv: { href: '/cv/CV_Samuel_Isip_es.pdf', locale: 'es' },

  seo: {
    title: {
      es: 'Samuel Isip — Desarrollador full stack',
      en: 'Samuel Isip — Full stack developer',
      ro: 'Samuel Isip — Dezvoltator full stack',
    },
    description: {
      es: 'Desarrollador full stack con seis años de experiencia en Java, Spring, React y Go. Aplicaciones en producción para Atresmedia, Redsys y Aena.',
      en: 'Full stack developer with six years of experience in Java, Spring, React and Go. Production applications for Atresmedia, Redsys and Aena.',
      ro: 'Dezvoltator full stack cu șase ani de experiență în Java, Spring, React și Go. Aplicații în producție pentru Atresmedia, Redsys și Aena.',
    },
  },
};
