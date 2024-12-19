<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import SocialLinks from './SocialLinks.vue';
import {computed} from 'vue';

const {t} = useI18n();

const credits = computed(() => t('footer.credits',{
    githubLink: `<a href="https://github.com/TdyP/teddypaul.fr">GitHub</a>`
}));
</script>

<template>
    <footer class="bg-orange-400 text-center p-4">
        <SocialLinks class="justify-center inline" />
        <p>{{ $t('footer.title') }}</p>
        <p class="mt-[1em]" v-html="credits" />
    </footer>
</template>