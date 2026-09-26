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
      es: 'Caché para el procesado de pagos virtuales',
      en: 'Caching for virtual payment processing',
      ro: 'Cache pentru procesarea plăților virtuale',
    },
    client: 'Redsys',
    year: '2024',
    summary: {
      es: 'La caché de un sistema nuevo que procesa los datos de miles de transacciones bancarias virtuales.',
      en: 'The cache of a new system that processes data from thousands of virtual bank transactions.',
      ro: 'Cache-ul unui sistem nou care procesează datele a mii de tranzacții bancare virtuale.',
    },
    problem: {
      es: 'Redsys es la plataforma de pagos virtuales que se usa en toda España. Un sistema nuevo tenía que procesar los datos de miles de transacciones sin ir al origen en cada una.',
      en: 'Redsys is the virtual payments platform used across Spain. A new system had to process data from thousands of transactions without going back to the source for each one.',
      ro: 'Redsys este platforma de plăți virtuale folosită în toată Spania. Un sistem nou trebuia să proceseze datele a mii de tranzacții fără să revină la sursă pentru fiecare.',
    },
    work: {
      es: 'Implementé la caché que usa el procesado de datos de esas transacciones.',
      en: 'I implemented the cache used when processing the data of those transactions.',
      ro: 'Am implementat cache-ul folosit la procesarea datelor acelor tranzacții.',
    },
    stack: ['Java', 'Spring Batch'],
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
      es: 'Corrección de errores y mejoras en el login y la caché del gateway por el que pasan los microservicios.',
      en: 'Bug fixes and improvements to the login and caching of the gateway the microservices go through.',
      ro: 'Corectarea erorilor și îmbunătățirea autentificării și a cache-ului în gateway-ul prin care trec microserviciile.',
    },
    problem: {
      es: 'Todos los microservicios dependen del gateway: cualquier fallo en el login o lentitud se nota en toda la plataforma.',
      en: 'Every microservice depends on the gateway: any login failure or slowdown is felt across the platform.',
      ro: 'Toate microserviciile depind de gateway: orice eroare la autentificare sau încetinire se simte în toată platforma.',
    },
    work: {
      es: 'Solucioné errores del gateway y mejoré el login y la caché con Redis.',
      en: 'I fixed bugs in the gateway and improved its login flow and Redis caching.',
      ro: 'Am rezolvat erori ale gateway-ului și am îmbunătățit autentificarea și cache-ul cu Redis.',
    },
    stack: ['Go', 'Redis', 'GKE'],
  },
];
