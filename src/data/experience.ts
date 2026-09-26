import type { Education, Job } from '@/types/content';

/** Most recent first. */
export const jobs: Job[] = [
  {
    role: {
      es: 'Analista programador',
      en: 'Software developer',
      ro: 'Analist programator',
    },
    company: 'Corporación Atresmedia',
    start: '2025-12',
    end: null,
    highlights: {
      es: [
        'Desarrollé desde cero la aplicación de nóminas y datos de empleados, que usan a diario cientos de personas (Spring Boot, Spring Cloud, PostgreSQL, React).',
        'Implementé la seguridad del API con Microsoft Entra ID, OAuth2/JWT y Spring Security.',
        'Llevé la aplicación a producción con Docker, Jenkins y GKE, y mejoré el gateway en Go que usan los microservicios de la plataforma.',
      ],
      en: [
        'Built the payroll and employee data application from scratch, used daily by hundreds of people (Spring Boot, Spring Cloud, PostgreSQL, React).',
        'Secured the API with Microsoft Entra ID, OAuth2/JWT and Spring Security.',
        'Shipped it to production with Docker, Jenkins and GKE, and improved the Go gateway shared by the platform’s microservices.',
      ],
      ro: [
        'Am dezvoltat de la zero aplicația de salarizare și date ale angajaților, folosită zilnic de sute de persoane (Spring Boot, Spring Cloud, PostgreSQL, React).',
        'Am implementat securitatea API-ului cu Microsoft Entra ID, OAuth2/JWT și Spring Security.',
        'Am dus aplicația în producție cu Docker, Jenkins și GKE și am îmbunătățit gateway-ul în Go folosit de microserviciile platformei.',
      ],
    },
  },
  {
    role: {
      es: 'Analista programador',
      en: 'Software developer',
      ro: 'Analist programator',
    },
    company: 'Serbatic',
    context: {
      es: 'Proyectos para Aena, Redsys y Atresmedia',
      en: 'Projects for Aena, Redsys and Atresmedia',
      ro: 'Proiecte pentru Aena, Redsys și Atresmedia',
    },
    start: '2020-11',
    end: '2025-12',
    highlights: {
      es: [
        'Redsys: implementé la capa de caché de un sistema nuevo que procesa miles de transacciones bancarias.',
        'Atresmedia: mantuve y evolucioné 5 aplicaciones web internas con workflows complejos. Reduje las incidencias un 70 % y el tiempo de generación de ficheros un 80 % refactorizando y optimizando consultas SQL.',
        'Aena: mejoré el SEO del sitio web corporativo.',
      ],
      en: [
        'Redsys: built the caching layer of a new system that processes thousands of bank transactions.',
        'Atresmedia: maintained and evolved 5 internal web applications with complex workflows. Cut incidents by 70% and file generation time by 80% through refactoring and SQL query optimisation.',
        'Aena: improved the SEO of the corporate website.',
      ],
      ro: [
        'Redsys: am implementat stratul de cache al unui sistem nou care procesează mii de tranzacții bancare.',
        'Atresmedia: am întreținut și dezvoltat 5 aplicații web interne cu fluxuri complexe. Am redus incidentele cu 70% și timpul de generare a fișierelor cu 80% prin refactorizare și optimizarea interogărilor SQL.',
        'Aena: am îmbunătățit SEO-ul site-ului corporativ.',
      ],
    },
  },
];

export const education: Education[] = [
  {
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      en: 'Higher Technician in Web Application Development',
      ro: 'Tehnician superior în dezvoltarea aplicațiilor web',
    },
    start: '2020-09',
    end: '2021-06',
  },
  {
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      en: 'Higher Technician in Cross-Platform Application Development',
      ro: 'Tehnician superior în dezvoltarea aplicațiilor multiplatformă',
    },
    start: '2018-10',
    end: '2020-06',
  },
];
