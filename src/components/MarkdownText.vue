<script setup lang="ts">
// @ts-expect-error
import Markdown from 'vue3-markdown-it';

defineProps<{
    source: string
}>();
</script>

<template>
    <Markdown class="[&_p]:mb-4 text-justify [&_strong]:text-orange-600" :source="source" :breaks="true"
        :xhtmlOut="true" />
</template>
