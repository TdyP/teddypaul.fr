<script setup lang="ts">
import Header from './components/Header.vue';
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Experiences from './sections/Experiences.vue';
import Projects from './sections/Projects.vue';
import BackToTop from './components/BackToTop.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main class="text-center bg-orange-100 h-min-screen">
    <Home />
    <About />
    <Projects class="bg-white" />
    <Experiences class="bg-orange-100" />
    <BackToTop />
    <Footer />
  </main>
</template>
