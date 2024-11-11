<script setup lang="ts">
import {inject} from 'vue';
import {IS_SIDE_PANEL_OPEN_KEY} from '../constants';
import {routes} from '../router/routes';
import {SidePanelState} from '../types';
import {socialList} from '../data/social';
import {Icon} from '@iconify/vue';

const sidePanelState = inject<SidePanelState>(IS_SIDE_PANEL_OPEN_KEY);

const menuItems = routes.filter(route => route.path !== '/');
</script>

<template>
    <div class="flex md:items-center gap-4 flex-col md:flex-row">
        <nav class="flex items-center">
            <ul class="flex flex-col gap-2 md:flex-row md:gap-2 list-none pl-0">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link :to="item.path" @click="sidePanelState?.toggleSidePanel"
                        class="py-1 md:px-4 md:py-2 border-black hover:border-b-2">{{ item.name
                        }}</router-link>
                </li>
            </ul>
        </nav>
        <div class="flex flex-row items-center gap-2 justify-self-end">
            <a v-for="social in socialList" :key="social.name" :href="social.link" target="_blank"
                class="text-xl md:text-2xl lg:text-3xl">
                <Icon :icon="social.icon" class="size-7 opacity-75" />
            </a>
        </div>
    </div>
</template>