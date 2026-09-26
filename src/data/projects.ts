import type { Project } from '@/types/content';

/*
 * Client work under NDA: no screenshots or public links, so each project
 * is presented as a short case study with its measurable result.
 * Order here is display order.
 */
export const projects: Project[] = [
  {
    slug: 'nominas-atresmedia',
    featured: true,
    title: {
      es: 'Aplicación de nóminas y datos de empleados',
      en: 'Payroll and employee data application',
      ro: 'Aplicație de salarizare și date ale angajaților',
    },
    client: 'Atresmedia',
    year: '2025–',
    summary: {
      es: 'Una aplicación crítica que usan cada día cientos de personas, construida desde cero y desplegada con el flujo DevOps completo.',
      en: 'A critical application used every day by hundreds of people, built from scratch and shipped through the full DevOps pipeline.',
      ro: 'O aplicație critică folosită zilnic de sute de persoane, construită de la zero și livrată prin fluxul DevOps complet.',
    },
    problem: {
      es: 'Recursos humanos necesitaba una aplicación propia para gestionar nóminas y datos de empleados: información sensible, muchos usuarios y cero margen para caídas.',
      en: 'HR needed its own application to manage payroll and employee data: sensitive information, many users and no room for downtime.',
      ro: 'Departamentul de resurse umane avea nevoie de o aplicație proprie pentru salarizare și datele angajaților: informații sensibile, mulți utilizatori și nicio marjă pentru întreruperi.',
    },
    work: {
      es: 'Diseñé el backend con Spring Boot y Spring Cloud sobre PostgreSQL y el frontend en React. Protegí el API con Microsoft Entra ID, OAuth2/JWT y Spring Security, y lo desplegué en GKE con Docker y Jenkins.',
      en: 'I designed the backend with Spring Boot and Spring Cloud on PostgreSQL and the frontend in React. I secured the API with Microsoft Entra ID, OAuth2/JWT and Spring Security, and deployed it to GKE with Docker and Jenkins.',
      ro: 'Am proiectat backend-ul cu Spring Boot și Spring Cloud pe PostgreSQL și frontend-ul în React. Am securizat API-ul cu Microsoft Entra ID, OAuth2/JWT și Spring Security și l-am lansat pe GKE cu Docker și Jenkins.',
    },
    metrics: [
      {
        value: { es: 'Cientos', en: 'Hundreds', ro: 'Sute' },
        label: { es: 'de usuarios cada día', en: 'of users every day', ro: 'de utilizatori în fiecare zi' },
      },
      {
        value: { es: 'De cero', en: 'From zero', ro: 'De la zero' },
        label: { es: 'a producción en GKE', en: 'to production on GKE', ro: 'la producție pe GKE' },
      },
    ],
    stack: ['Spring Boot', 'Spring Cloud', 'PostgreSQL', 'React', 'Entra ID', 'GKE'],
  },
  {
    slug: 'apps-internas-atresmedia',
    title: {
      es: 'Cinco aplicaciones internas, más estables y rápidas',
      en: 'Five internal applications, steadier and faster',
      ro: 'Cinci aplicații interne, mai stabile și mai rapide',
    },
    client: 'Atresmedia',
    year: '2020–2025',
    summary: {
      es: 'Mantenimiento y evolución de 5 aplicaciones web con workflows complejos.',
      en: 'Maintaining and evolving 5 web applications with complex workflows.',
      ro: 'Întreținerea și dezvoltarea a 5 aplicații web cu fluxuri complexe.',
    },
    problem: {
      es: 'Incidencias frecuentes y procesos de generación de ficheros que tardaban demasiado.',
      en: 'Frequent incidents and file generation jobs that took far too long.',
      ro: 'Incidente frecvente și procese de generare a fișierelor care durau prea mult.',
    },
    work: {
      es: 'Refactoricé las partes más frágiles y optimicé las consultas SQL que frenaban la generación de ficheros.',
      en: 'I refactored the most fragile parts and optimised the SQL queries that were slowing file generation down.',
      ro: 'Am refactorizat părțile cele mai fragile și am optimizat interogările SQL care încetineau generarea fișierelor.',
    },
    metrics: [
      { value: '−70 %', label: { es: 'incidencias', en: 'incidents', ro: 'incidente' } },
      { value: '−80 %', label: { es: 'tiempo de generación', en: 'generation time', ro: 'timp de generare' } },
    ],
    stack: ['React', 'Spring Boot', 'SQL'],
  },
  {
    slug: 'cache-redsys',
    title: {
      es: 'Capa de caché para transacciones bancarias',
      en: 'Caching layer for bank transactions',
      ro: 'Strat de cache pentru tranzacții bancare',
    },
    client: 'Redsys',
    year: '2020–2025', // PLACEHOLDER: narrow down the year
    summary: {
      es: 'La capa de caché de un sistema nuevo que procesa miles de transacciones bancarias.',
      en: 'The caching layer of a new system that processes thousands of bank transactions.',
      ro: 'Stratul de cache al unui sistem nou care procesează mii de tranzacții bancare.',
    },
    problem: {
      es: 'Un sistema de pagos nuevo tenía que responder rápido bajo volumen alto sin consultar el origen en cada transacción.',
      en: 'A new payments system had to respond quickly under high volume without hitting the source on every transaction.',
      ro: 'Un sistem nou de plăți trebuia să răspundă rapid la volum mare fără să interogheze sursa la fiecare tranzacție.',
    },
    work: {
      es: 'Implementé la capa de caché del sistema.',
      en: 'I implemented the system’s caching layer.',
      ro: 'Am implementat stratul de cache al sistemului.',
    },
    stack: ['Java', 'Redis'], // PLACEHOLDER: confirm the stack
  },
  {
    slug: 'gateway-go',
    title: {
      es: 'Gateway de la plataforma en Go',
      en: 'Platform gateway in Go',
      ro: 'Gateway-ul platformei în Go',
    },
    client: 'Atresmedia',
    year: '2025–',
    summary: {
      es: 'Mejoras en el gateway por el que pasan los microservicios de la plataforma.',
      en: 'Improvements to the gateway that the platform’s microservices go through.',
      ro: 'Îmbunătățiri ale gateway-ului prin care trec microserviciile platformei.',
    },
    // PLACEHOLDER: describe what you changed in the gateway and its effect.
    problem: {
      es: 'Todos los microservicios dependen del gateway: cualquier fallo o lentitud se nota en toda la plataforma.',
      en: 'Every microservice depends on the gateway: any failure or slowdown is felt across the platform.',
      ro: 'Toate microserviciile depind de gateway: orice eroare sau încetinire se simte în toată platforma.',
    },
    work: {
      es: 'Mejoré el gateway en Go que comparten los microservicios.',
      en: 'I improved the Go gateway shared by the microservices.',
      ro: 'Am îmbunătățit gateway-ul în Go folosit de microservicii.',
    },
    stack: ['Go', 'GKE', 'Docker'],
  },
];
