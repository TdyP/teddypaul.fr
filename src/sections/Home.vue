<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import TypingAnimation from '../components/TypingAnimation.vue';
import {Icon} from '@iconify/vue';

const {t} = useI18n()

const prefix = t('home.typingTexts.prefix');
const typingTexts = [
    t('home.typingTexts.expertTypescript'),
    t('home.typingTexts.expertNodeReact'),
    t('home.typingTexts.softwareCraftsman'),
];

</script>

<template>
    <section id="home"
        class="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 pb-4 h-[calc(100svh-7rem)] grid grid-rows-[1fr_100px] grid-cols-1">
        <div class="content-center">
            <TypingAnimation class="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mx-auto my-24 gid"
                :prefix="prefix" :texts="typingTexts" />
        </div>
        <div class="flex flex-col items-center px-4">
            <span class="text-xl md:text-3xl font-medium">
                {{ $t('home.tagline') }}
            </span>
            <router-link to="/#about">
                <Icon icon="fa6-solid:chevron-down" class="py-2 px-4 size-16 md:size-20" />
            </router-link>
        </div>
    </section>
</template>
