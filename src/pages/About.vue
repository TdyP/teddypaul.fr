<script setup lang="ts">
import TypingAnimation from '../components/TypingAnimation.vue';

const prefix = 'Je suis';
const typingTexts = [
    'Expert Typescript',
    'Expert React/Node',
    'Artisan logiciel',
]

const skills = [
    {
        name: 'Typescript',
        score: 5,
        icon: 'typescript.svg'
    },
    {
        name: 'Node.js',
        score: 5,
        icon: 'node.svg'
    },
    {
        name: 'React',
        score: 5,
        icon: 'react.svg'
    },
    {
        name: 'GraphQL',
        score: 5,
        icon: 'graphql.svg'
    },
    {
        name: 'Testing',
        score: 4,
    },
    {
        name: 'NoSQL',
        score: 4
    }
];
</script>

<template>
    <TypingAnimation :prefix="prefix" :texts="typingTexts" />
    <section>
        <h2>Qui suis-je?</h2>
        <p>Développeur Web Full Stack avec 15 ans d'expérience, passionné par la création de solutions digitales
            robustes et évolutives en appliquante les principes du Software Craftsmanship.</p>
        <p class="mt-2">Je donne vie à vos idées, de la manière la plus simple, élégante et éco-conçue possible!</p>
    </section>
    <section class="mt-8">
        <h2>Compétences</h2>
        <div class="flex flex-row gap-4 flex-wrap justify-evenly align-middle">
            <div v-for="skill of skills" :key="skill.name"
                class="flex flex-col items-center gap-y-2 border-2 p-4 rounded-lg justify-between align-middle h-32"
                w-32>
                <img v-if="skill.icon" :src="`../icons/${skill.icon}`" :alt="skill.name" class="w-12 h-12" />
                <p>{{ skill.name }}</p>
                <div class="flex gap-x-1">
                    <span v-for="i in 5" :key="i"
                        :class="`w-4 h-4 rounded-full ${i <= skill.score ? 'bg-blue-500' : 'bg-gray-300'}`"></span>
                </div>
            </div>
        </div>
    </section>
</template>