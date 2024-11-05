import About from '../pages/About.vue';
import Experiences from '../pages/Experiences.vue';
import Education from '../pages/Education.vue';
import Contact from '../pages/Contact.vue';

export const routes = [
    {
        path: '/',
        name: 'À propos',
        component: About,
    },
    {
        path: '/experiences',
        name: 'Expériences',
        component: Experiences,
    },
    {
        path: '/education',
        name: 'Formation',
        component: Education,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
];
