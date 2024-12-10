<script setup lang="ts">
import MarkdownText from '../components/MarkdownText.vue';
import PageSection from '../components/PageSection.vue';
import {about,quote} from '../data/about';
</script>

<template>
    <PageSection :id="'about'" class="mt-24 mb-24 px-4 sm:px-8 md:px-12 text-justify">
        <h4>Hello, moi c'est Teddy! 👋</h4>
        <MarkdownText :source="about" />
        <div class="italic font-bold text-xl md:text-2xl px-8 pt-8 text-right">
            {{ quote }}
        </div>
    </PageSection>
</template>