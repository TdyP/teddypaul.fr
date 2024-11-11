import {createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const element: HTMLElement | null = document.querySelector(to.hash);

            if (!element) {
                return {top: 0};
            }

            const offset = 60;
            const top = element.offsetTop - offset;

            window.scrollTo({
                top,
                behavior: 'smooth',
            });

            return false;
        }
    },
});

export default router;
