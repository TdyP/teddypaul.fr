<script lang="ts" setup>
const menuItems = [
    'À propos',
    'Expériences',
    'Formations',
    'Contact'
];
</script>

<template>
    <nav class="flex justify-center gap-x-4">
        <ul class="flex gap-x-4">
            <li v-for="item in menuItems" :key="item">
                <a href="#" class="text-black">{{ item }}</a>
            </li>
        </ul>
    </nav>
</template>