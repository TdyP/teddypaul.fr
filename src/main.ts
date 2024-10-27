import {createApp, ref} from 'vue';
import './index.css';
import App from './App.vue';
import {IS_SIDE_PANEL_OPEN_KEY} from './constants';
import {SidePanelState} from './types';

const app = createApp(App);

const isSidePanelOpen = ref(false);
function toggleSidePanel() {
    isSidePanelOpen.value = !isSidePanelOpen.value;
}

app.provide<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY, {
    isSidePanelOpen,
    toggleSidePanel,
});

app.mount('#app');
