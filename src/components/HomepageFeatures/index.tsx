import styles from './styles.module.css';
import * as npmProjects from './npm';

const npmProjectList: npmProjects.NPMProjectProps[] = [
  {
    name: 'view-ignored',
    title: 'View ignored',
    description: 'Retrieve lists of files ignored by Git, npm, Yarn and VSC Extension.',
    repo: 'Mopsgamer/view-ignored',
  },
  {
    name: 'discord-env-types',
    title: 'Discord environment types',
    description: 'Type definitions for Discord environment.',
    repo: 'Mopsgamer/discord-env-types',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      {npmProjects.fromList(npmProjectList)}
    </section>
  );
}
