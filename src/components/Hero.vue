<template>
  <section class="hero">
    <!-- Slideshow -->
    <div class="hero-slideshow">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        :style="{ backgroundImage: `url(${image})` }"
        :class="{ active: index === currentIndex }"
      ></div>
      <div class="overlay"></div>
    </div>

    <!-- Hero Text -->
    <div class="hero-content">
      <h1>Welcome to Msongori Limited</h1>
      <p>Water Solutions & Engineering Experts</p>
      <button @click="scrollToAbout">Learn More</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Replace these URLs with your local images or online links
const images = [
  new URL('../assets/solar5.jpg', import.meta.url).href,
  new URL('../assets/water4.jpg', import.meta.url).href,
  new URL('../assets/pump6.jpg', import.meta.url).href
]

const currentIndex = ref(0)

// Slideshow automatic animation
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3000) // 3 seconds per slide
})

// Scroll to About section
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

/* Slideshow */
.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

/* Overlay for readability */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.hero-content button {
  padding: 12px 30px;
  font-size: 1.1rem;
  background: #00c2ff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.hero-content button:hover {
  background: #c50707;
  transform: scale(1.05);
}

/* Optional: small animated shapes for pro look */
.hero::after {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(0, 194, 255, 0.2);
  top: 10%;
  left: 5%;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

.hero::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.15);
  bottom: 5%;
  right: 10%;
  animation: float 8s ease-in-out infinite alternate;
  z-index: 2;
}

@keyframes float {
  0% { transform: translateY(0) translateX(0) rotate(0deg); }
  50% { transform: translateY(-20px) translateX(15px) rotate(180deg); }
 100% { transform: translateY(0) translateX(0) rotate(360deg); }
}
</style>