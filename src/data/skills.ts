import type { SkillGroup } from '@/types/content';

export const skills: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages', ro: 'Limbaje' },
    items: ['Java', 'Go', 'JavaScript', 'Python'],
  },
  {
    title: { es: 'Frameworks', en: 'Frameworks', ro: 'Framework-uri' },
    items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Quarkus', 'React'],
  },
  {
    title: {
      es: 'Datos y mensajería',
      en: 'Data and messaging',
      ro: 'Date și mesagerie',
    },
    items: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'RabbitMQ'],
  },
  {
    title: {
      es: 'DevOps y herramientas',
      en: 'DevOps and tooling',
      ro: 'DevOps și unelte',
    },
    items: ['Docker', 'Jenkins', 'GKE', 'OpenShift', 'GitLab', 'SonarQube', 'Jira', 'Claude Code'],
  },
];
