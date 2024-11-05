<script setup lang="ts">
import {inject} from 'vue';
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {routes} from '../router/routes';
import {SidePanelState} from '../types';

const sidePanelState = inject<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY);
</script>

<template>
    <nav class="mt-8">
        <ul class="flex flex-col gap-2 md:flex-row md:gap-12 list-none">
            <li v-for="route in routes" :key="route.name">
                <router-link :to="route.path" @click="sidePanelState?.toggleSidePanel" class="px-2 py-1 md:px-4 md:py-2"
                    active-class="border-l-4 border-black md:border-b-4 md:border-l-0">{{ route.name
                    }}</router-link>
            </li>
        </ul>
    </nav>
</template>