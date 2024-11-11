<script lang="ts" setup>
import {inject,onMounted,onUnmounted,ref} from 'vue';
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {SidePanelState} from '../types';
import Menu from './Menu.vue';


const sidePanel = ref<HTMLElement | null>(null);
const sidePanelState = inject<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY);

if (!sidePanelState) {
    throw new Error('sidePanelState is not provided');
}
const {toggleSidePanel} = sidePanelState;

const handleClickOutside = async (event: MouseEvent) => {
    if (sidePanel.value && !sidePanel.value?.contains(event.target as Node)) {
        toggleSidePanel();
    }
};

onMounted(() => document.addEventListener('mousedown',handleClickOutside));
onUnmounted(() => document.removeEventListener('mousedown',handleClickOutside));
</script>

<template>
    <aside ref="sidePanel" class="bg-gray-100 p-4 w-1/3 h-screen m-0 fixed top-0 right-0 shadow-md z-50">
        <!-- close button -->
        <div class="flex justify-end">
            <button @click="toggleSidePanel">
                <img src="../icons/close.svg" alt="close" class="w-6 h-6" />
            </button>
        </div>

        <Menu />
    </aside>
</template>