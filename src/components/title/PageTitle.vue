<script lang="tsx" setup>
import Capital from './Capital.vue';
</script>

<template>
    <h1 class="flex flex-col text-center">
        <div class="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-widest">
            <Capital>T</Capital>eddy <Capital>P</Capital>aul
        </div>
        <div class="uppercase text-xs md:text-sm tracking-widest">{{ $t('header.subtitle') }}</div>
    </h1>
</template>