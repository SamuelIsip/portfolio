import type { SkillGroup } from '@/types/content';

/*
 * `icon` is a Simple Icons slug (https://simpleicons.org). Java uses OpenJDK's
 * logo because Oracle's isn't available there; GKE uses Kubernetes'.
 */
export const skills: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages', ro: 'Limbaje' },
    items: [
      { name: 'Java', icon: 'openjdk' },
      { name: 'Go', icon: 'go' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    title: { es: 'Frameworks', en: 'Frameworks', ro: 'Framework-uri' },
    items: [
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Spring Cloud', icon: 'spring' },
      { name: 'Spring Security', icon: 'springsecurity' },
      { name: 'Quarkus', icon: 'quarkus' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    title: {
      es: 'Datos y mensajería',
      en: 'Data and messaging',
      ro: 'Date și mesagerie',
    },
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Elasticsearch', icon: 'elasticsearch' },
      { name: 'Redis', icon: 'redis' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
    ],
  },
  {
    title: {
      es: 'DevOps y herramientas',
      en: 'DevOps and tooling',
      ro: 'DevOps și unelte',
    },
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GKE', icon: 'kubernetes' },
      { name: 'OpenShift', icon: 'redhatopenshift' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: 'SonarQube', icon: 'sonarqubeserver' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Claude Code', icon: 'claude' },
    ],
  },
];
