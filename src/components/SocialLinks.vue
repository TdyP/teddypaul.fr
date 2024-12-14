<script setup lang="ts">
import {socialList} from '../data/social';
import {Icon} from '@iconify/vue';
</script>
<template>
    <div class="flex flex-row items-center gap-2 justify-self-end">
        <a v-for="social in socialList" :key="social.name" :href="social.link" target="_blank"
            class="text-xl md:text-2xl lg:text-3xl hover:text-white">
            <Icon :icon="social.icon" class="size-7 opacity-75" />
        </a>
    </div>
</template>