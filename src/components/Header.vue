<script setup lang="ts">
import {inject,ref,onMounted,onUnmounted} from 'vue';
import Title from './Title.vue';
import SidePanel from './SidePanel.vue';
import Menu from './Menu.vue';
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {SidePanelState} from '../types';

const sidePanelState = inject<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY);

if (!sidePanelState) {
    throw new Error('sidePanelState is not provided');
}

const {isSidePanelOpen,toggleSidePanel} = sidePanelState;

const _isMobileScreen = () => window.innerWidth < 768;

const isMobile = ref(_isMobileScreen());

const updateIsMobile = () => {
    isMobile.value = _isMobileScreen();
};

const goToHome = () => window.location.href = '/';

onMounted(() => window.addEventListener('resize',updateIsMobile));
onUnmounted(() => window.removeEventListener('resize',updateIsMobile));
</script>

<template>
    <header class="p-4 w-full mx-auto bg-orange-400 flex shadow-md items-center gap-x-4 h-auto md:flex-col">
        <Title class="w-full cursor-pointer" @click="goToHome" />
        <button v-if="isMobile" @click="toggleSidePanel">
            <img src="../icons/menu.svg" alt="menu" class="w-6 h-6" />
        </button>
        <SidePanel v-if="isMobile && isSidePanelOpen" />
        <Menu v-if="!isMobile" />
    </header>
</template>