<script lang="ts" setup>
import PageSection from '../components/PageSection.vue';
import Project from '../components/projects/Project.vue';
import {projectsList} from '../data/projects';
</script>

<template>
    <PageSection :id="'projects'" :title="'Projets'">
        <div class="flex flex-row gap-4 justify-center flex-wrap">
            <Project v-for="project in projectsList" :project="project" />
        </div>
    </PageSection>
</template>