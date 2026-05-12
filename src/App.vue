<template>
  <Navbar />
  <Hero />
  <About />       <!-- About section first -->
  <Services />    <!-- Services after About -->
  <Projects />
  <Testimonials />
  <Stats />
  <Contact />
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Testimonials from './components/Testimonials.vue'
import Stats from './components/Stats.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style>
/* Optional global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
section {
  scroll-margin-top: 140px;
}
</style>