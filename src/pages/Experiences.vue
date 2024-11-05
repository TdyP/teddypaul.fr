<script lang="ts" setup>
import Experience from '../components/experiences/Experience.vue';
import {experiencesList} from '../data/experiences';
</script>

<template>
    <h1>Experiences</h1>
    <div class="flex flex-col gap-4">
        <Experience v-for="experience in experiencesList" :experience="experience" />
    </div>
</template>