<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import MarkdownText from '../components/MarkdownText.vue';
import PageSection from '../components/PageSection.vue';
import {ref,watchEffect} from 'vue';
import {EMAIL} from '../constants';

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
        <div class="flex justify-center">
            <a :href="`mailto:${EMAIL}`" class="inline-block p-4 mt-4 bg-orange-400 font-bold text-white rounded-lg">{{
                $t('about.contactMe') }}</a>
        </div>

    </PageSection>
</template>