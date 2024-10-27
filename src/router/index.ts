import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import About from '../pages/About.vue';
import Experiences from '../pages/Experiences.vue';

const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
