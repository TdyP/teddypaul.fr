<script setup lang="ts">
import {inject} from 'vue';
import Title from './Title.vue'
import SidePanel from './SidePanel.vue'
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {SidePanelOpenProvider} from '../types';

const sidePanelState = inject<SidePanelOpenProvider>(IS_SIDE_PANEL_OPEN_KEY);

if (!sidePanelState) {
    throw new Error('sidePanelState is not provided');
}

const {isSidePanelOpen,toggleSidePanel} = sidePanelState;

</script>

<template>
    <div class="p-4 w-full mx-auto bg-orange-400 flex shadow-md items-center gap-x-4 h-20">
        <Title class="w-full" />
        <button @click="toggleSidePanel">
            <img src="../icons/menu.svg" alt="menu" class="w-6 h-6" />
        </button>
        <SidePanel v-if="isSidePanelOpen" />
    </div>
</template>