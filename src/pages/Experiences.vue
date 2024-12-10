<script lang="ts" setup>
import Experience from '../components/experiences/Experience.vue';
import PageSection from '../components/PageSection.vue';
import {experiencesList} from '../data/experiences';
</script>

<template>
    <PageSection :id="'experiences'" :title="'Experiences'">
        <div class="flex flex-col gap-4 sm:px-2 md:px-4 items-center">
            <Experience v-for="experience in experiencesList" :experience="experience" />
        </div>
    </PageSection>
</template>