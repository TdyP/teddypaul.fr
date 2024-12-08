import About from '../pages/About.vue';
import Experiences from '../pages/Experiences.vue';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/#about',
        name: 'À propos',
        component: About,
    },
    {
        path: '/#projects',
        name: 'Projets',
        component: Projects,
    },
    {
        path: '/#experiences',
        name: 'Expériences',
        component: Experiences,
    },
    // {
    //     path: '/#contact',
    //     name: 'Contact',
    // },
];
