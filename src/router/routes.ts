import About from '../sections/About.vue';
import Experiences from '../sections/Experiences.vue';
import Home from '../sections/Home.vue';
import Projects from '../sections/Projects.vue';

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
