<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import Experience from '../components/experiences/Experience.vue';
import PageSection from '../components/PageSection.vue';
import {type Experience as ExperienceType} from '../types';
import {ref,watchEffect} from 'vue';

const {locale} = useI18n();
const experiencesList = ref<ExperienceType[]>()
const loadContent = async () => {
    const module = await import(`../data/${locale.value}/experiences.ts`);
    experiencesList.value = module.experiencesList;
}

watchEffect(() => {
    loadContent();
});


</script>

<template>
    <PageSection :id="'experiences'" :title="'Experiences'">
        <div class="flex flex-col gap-4 sm:px-2 md:px-4 items-center">
            <Experience v-for="experience in experiencesList" :experience="experience" />
        </div>
    </PageSection>
</template>