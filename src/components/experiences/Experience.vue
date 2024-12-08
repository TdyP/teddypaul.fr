<script setup lang="ts">
import {Experience} from '../../types';
// @ts-expect-error
import Markdown from 'vue3-markdown-it';
import {Icon} from '@iconify/vue';

defineProps<{
    experience: Experience
}>();
</script>

<template>
    <div
        class="relative px-4 md:px-12 py-8 bg-gray-100 rounded-xl border-orange-400 border-4 mx-2 md:mx-8 grid grid-rows-[auto_auto_1fr_auto] text-left w-11/12 xl:w-[1175px]">
        <h3>{{ experience.title }}</h3>
        <div
            class="absolute text-center top-[-1rem] right-[-1rem] md:left-[-2rem] md:top-[calc(50%_-_2rem)] rounded-full bg-white border-orange-400 border-4 w-16 h-16 flex flex-col items-center justify-center font-bold">
            <div v-if="experience.to" class="text-center text-sm">{{ experience.to }}</div>
            <div v-if="experience.from && experience.from !== experience.to" class="text-center text-sm">{{
                experience.from }}</div>
        </div>
        <div class="text-gray-600 flex flex-col md:flex-row gap-2 md:gap-8 mb-4">
            <div>
                <Icon icon="fa6-solid:briefcase" class="mr-1 inline" />
                {{ experience.company }}
            </div>
            <div>
                <Icon icon="fa6-solid:map-pin" class="mr-1 inline" />
                {{ experience.location }}
            </div>
        </div>
        <Markdown class="[&_p]:mb-4 text-justify [&_strong]:text-orange-600" :source="experience.description"
            :breaks="true" :xhtmlOut="true" />
    </div>
</template>