import About from '../sections/About.vue';
import Experiences from '../sections/Experiences.vue';
import Home from '../sections/Home.vue';
import Projects from '../sections/Projects.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/#about',
        name: 'about',
        component: About,
    },
    {
        path: '/#projects',
        name: 'projects',
        component: Projects,
    },
    {
        path: '/#experiences',
        name: 'experiences',
        component: Experiences,
    },
    // {
    //     path: '/#contact',
    //     name: 'Contact',
    // },
];
