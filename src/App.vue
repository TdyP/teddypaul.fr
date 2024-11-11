<script setup lang="ts">
import Header from './components/Header.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Experiences from './pages/Experiences.vue';
import Projects from './pages/Projects.vue';
</script>

<template>
  <Header />
  <main class="text-center bg-orange-100 h-min-screen">
    <Home />
    <About />
    <Projects class="bg-white" />
    <Experiences class="bg-orange-100" />
  </main>
</template>
