<script setup lang="ts">
import {ref,onMounted,onUnmounted} from 'vue';
import {Icon} from '@iconify/vue';

const showButton = ref(false);

const onClick = () => {
    window.scrollTo({top: 0,behavior: 'smooth'});
};

const handleScroll = () => {
    showButton.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
    window.addEventListener('scroll',handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll',handleScroll);
});
</script>

<template>
    <button v-if="showButton" @click="onClick"
        class="fixed bottom-4 right-4 p-2 bg-orange-500 text-white rounded-full z-index-50 shadow-lg">
        <Icon icon="fa-solid:arrow-up" class="w-6 h-6" />
    </button>
</template>