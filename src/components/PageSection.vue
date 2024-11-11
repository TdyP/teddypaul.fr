<script setup lang="ts">

defineProps<{
    id: string,
    title?: string
}>();
</script>

<template>
    <section :id="id" class="mt-16 mb-16 pt-8 pb-12">
        <h2 v-if="title">{{ title }}</h2>
        <slot />
    </section>
</template>