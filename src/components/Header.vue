<script setup lang="ts">
import {inject,ref,onMounted,onUnmounted} from 'vue';
import Title from './title/Title.vue';
import SidePanel from './SidePanel.vue';
import Menu from './Menu.vue';
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {SidePanelState} from '../types';
import {Icon} from '@iconify/vue';

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
    <header
        class="p-6 md:px-12 w-full mx-auto flex flex-row justify-between items-center gap-x-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 h-28">
        <Title class="cursor-pointer" @click="goToHome" />
        <button v-if="isMobile" @click="toggleSidePanel">
            <Icon icon="fa6-solid:bars" class="w-6 h-6" />
        </button>
        <SidePanel v-if="isMobile && isSidePanelOpen" />
        <Menu v-if="!isMobile" />
    </header>
</template>