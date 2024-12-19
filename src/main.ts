import {createApp, ref} from 'vue';
import {createI18n} from 'vue-i18n';
import './index.css';
import App from './App.vue';
import {IS_SIDE_PANEL_OPEN_KEY} from './constants';
import {SidePanelState} from './types';
import router from './router';
import localeEn from './locales/en.json';
import localeFr from './locales/fr.json';

const app = createApp(App);

const isSidePanelOpen = ref(false);

// Check if in mobile view
function toggleSidePanel() {
    isSidePanelOpen.value = !isSidePanelOpen.value;
}

app.use(router);

app.provide<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY, {
    isSidePanelOpen,
    toggleSidePanel,
});

const userLocale = navigator.language || 'en';

const i18n = createI18n({
    locale: userLocale.split('-')[0], // Use only the language part, e.g., 'en' from 'en-US'
    fallbackLocale: 'en',
    messages: {
        en: localeEn,
        fr: localeFr,
    },
    legacy: false,
});
app.use(i18n);

app.mount('#app');
