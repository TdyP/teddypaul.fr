import {Project} from '../../types';

export const projectsList: Project[] = [
    {
        title: 'LEAV Engine',
        description: `
Plateforme no-code open-source orientée base de données pour la création d'applications web.
        `,
        link: 'https://leav-engine.com',
        githubLink: 'https://github.com/leav-solutions/leav-engine',
        tags: ['Typescript', 'Node.js', 'React', 'ArangoDB', 'GraphQL'],
        image: 'logo-leavengine.svg',
    },
    {
        title: 'Portfolio',
        description: `
Portfolio sur lequel vous vous trouvez actuellement. L'occasion aussi de tester des choses différentes comme VueJS et TailwindCSS.
        `,
        link: 'https://teddypaul.fr',
        githubLink: 'https://github.com/TdyP/teddypaul.fr',
        tags: ['Typescript', 'Vue.js', 'Tailwind', 'Vite'],
        image: 'portfolio.png',
    },
];
