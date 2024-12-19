<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import PageSection from '../components/PageSection.vue';
import Project from '../components/projects/Project.vue';
import {type Project as ProjectType} from '../types';
import {ref,watchEffect} from 'vue';

const {locale} = useI18n();
const projectsList = ref<ProjectType[]>()
const loadContent = async () => {
    const module = await import(`../data/${locale.value}/projects.ts`);
    projectsList.value = module.projectsList;
}

watchEffect(() => {
    loadContent();
});

</script>

<template>
    <PageSection :id="'projects'" :title="'Projets'">
        <div class="flex flex-row gap-4 justify-center flex-wrap">
            <Project v-for="project in projectsList" :project="project" />
        </div>
    </PageSection>
</template>