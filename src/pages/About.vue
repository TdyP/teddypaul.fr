<script setup lang="ts">
import PageSection from '../components/PageSection.vue';


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
    <PageSection :id="'about'" class="mt-24 mb-24 px-12">
        <p>Développeur Web Full Stack avec 15 ans d'expérience, passionné par la création de solutions digitales
            robustes et évolutives en appliquant les principes du Software Craftsmanship.</p>
        <p class="mt-2">Je donne vie à vos idées, de la manière la plus simple, élégante et éco-conçue possible!</p>
    </PageSection>
</template>