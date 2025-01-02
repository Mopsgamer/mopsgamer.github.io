import * as projects from './projects';

export default function HomepageFeatures(): JSX.Element[] {
  return [
    projects.fromList('Projects', [
      {
        icon: 'mdi:web',
        title: 'This website',
        description: 'mopsgamer.github.io',
        repo: 'Mopsgamer/mopsgamer.github.io',
      },
      {
        icon: 'bx:chat',
        title: 'Restapp',
        description: 'Chat application written in GO, using HTMX, Shoelace and Tailwind. Bundler: esbuild. Environment: Deno.',
        repo: 'Mopsgamer/restapp',
      },
      {
        title: 'Sincer',
        description: 'Node.js command line time monitoring client.',
        repo: 'Mopsgamer/sincer',
      },
      {
        title: 'BetterDiscord-mopsified',
        description: 'Modified (mopsified) BetterDiscord. Added progress bar.',
        repo: 'Mopsgamer/BetterDiscord-mopsified',
        repoFork: 'BetterDiscord/BetterDiscord'
      },
    ]),
    projects.fromList('NPM packages', [
      {
        npmName: 'view-ignored',
        title: 'View ignored',
        description: 'Retrieve lists of files ignored by Git, NPM, Yarn and VSC Extension.',
        repo: 'Mopsgamer/view-ignored',
      },
      {
        npmName: 'discord-env-types',
        title: 'Discord environment types',
        description: 'Type definitions for Discord environment.',
        repo: 'Mopsgamer/discord-env-types',
      },
      {
        npmName: '@m234/nerd-fonts',
        title: 'Nerd Fonts',
        description: 'Get glyph by classname or file path.',
        repo: 'Mopsgamer/nerd-fonts',
      },
      {
        npmName: '@m234/config',
        title: 'Config',
        description: 'Configuration loader with type check.',
        repo: 'Mopsgamer/config',
      },
    ]),
  ]
}
