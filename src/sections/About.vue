<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import MarkdownText from '../components/MarkdownText.vue';
import PageSection from '../components/PageSection.vue';
import {ref,watchEffect} from 'vue';

const {locale} = useI18n();
const about = ref('')
const loadContent = async () => {
    const module = await import(`../data/${locale.value}/about.ts`);
    about.value = module.about;
}

watchEffect(() => {
    loadContent();
});

</script>

<template>
    <PageSection :id="'about'" class="mt-24 mb-24 px-4 sm:px-8 md:px-12 text-justify">
        <h4>{{ $t('about.title') }}! 👋</h4>
        <MarkdownText :source="about" />
    </PageSection>
</template>