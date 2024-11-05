<script setup lang="ts">
import {Experience} from '../../types';
import Markdown from 'vue3-markdown-it';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faBriefcase,faCalendar,faMapMarker} from '@fortawesome/free-solid-svg-icons';

defineProps<{
    experience: Experience
}>();
</script>

<template>
    <div class="p-4 bg-gray-100 rounded-lg">
        <h2>{{ experience.title }}</h2>
        <div class="text-gray-600 flex flex-row gap-8 mb-4">
            <div>
                <FontAwesomeIcon :icon="faCalendar" class="mr-1" />
                {{ [experience.from,experience.to].filter(Boolean).join(' - ') }}
            </div>
            <div>
                <FontAwesomeIcon :icon="faBriefcase" class="mr-1" />
                {{ experience.company }}
            </div>
            <div>
                <FontAwesomeIcon :icon="faMapMarker" class="mr-1" />
                {{ experience.location }}
            </div>
        </div>
        <Markdown class="[&_p]:mb-4" :source="experience.description" :breaks="true" :xhtmlOut="true" />
    </div>
</template>