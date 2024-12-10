<script setup lang="ts">
import {Project} from '../../types';
// @ts-expect-error
import {Icon} from '@iconify/vue';
import MarkdownText from '../MarkdownText.vue';

defineProps<{
    project: Project
}>();
</script>

<template>
    <div
        class="p-8 bg-gray-100 rounded-xl border-orange-400 border-4 my-4 mx-8 grid grid-rows-[auto_auto_1fr_auto] w-[450px]">
        <h3>{{ project.title }}</h3>
        <img :src="`/assets/${project.image}`" :alt="project.title"
            class="w-80% object-cover rounded-lg mb-4 justify-self-center" />
        <MarkdownText :source="project.description" />
        <div class="flex flex-row justify-center gap-4 mt-8">
            <a :href="project.githubLink" target="_blank" class="btn btn-primary">
                <Icon icon="fa6-brands:github" class="size-8" />
            </a>
            <a :href="project.link" target="_blank" class="btn btn-primary">
                <Icon icon="fa6-solid:globe" class="size-8" />
            </a>
        </div>
    </div>
</template>