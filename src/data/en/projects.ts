import {type Project} from '../../types';

export const projectsList: Project[] = [
    {
        title: 'LEAV Engine',
        description: `
Open-source no-code platform oriented towards databases for building web applications.
        `,
        link: 'https://leav-engine.com',
        githubLink: 'https://github.com/leav-solutions/leav-engine',
        tags: ['Typescript', 'Node.js', 'React', 'ArangoDB', 'GraphQL'],
        image: 'logo-leavengine.svg',
    },
    {
        title: 'Portfolio',
        description: `
Portfolio you are currently visiting. Also an opportunity to try different things like VueJS and TailwindCSS.
        `,
        link: 'https://teddypaul.fr',
        githubLink: 'https://github.com/TdyP/teddypaul.fr',
        tags: ['Typescript', 'Vue.js', 'Tailwind', 'Vite'],
        image: 'portfolio.png',
    },
];
