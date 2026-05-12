<template>
  <section id="stats" class="stats">
    <h2 class="stats-heading">Our Achievements</h2> <!-- Section heading -->

    <div class="stats-container">
      <div class="stat" v-for="(item, index) in stats" :key="index" ref="statRefs">
        <p class="stat-title">{{ item.title }}</p>
        <div class="stat-bar-container">
          <div class="stat-bar" :style="{ width: item.animatedWidth + '%' }"></div>
        </div>
        <p class="stat-number">{{ item.animatedValue }}+</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const stats = ref([
  { title: 'Projects Completed', value: 120, animatedValue: 0, animatedWidth: 0 },
  { title: 'Clients Served', value: 100, animatedValue: 0, animatedWidth: 0 },
  { title: 'Regions Covered', value: 20, animatedValue: 0, animatedWidth: 0 },
  { title: 'Years Experience', value: 5, animatedValue: 0, animatedWidth: 0 }
])

const statRefs = ref([])

// Animate when scrolling into view
onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = statRefs.value.indexOf(entry.target)
          if (index !== -1) animateStat(stats.value[index])
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    statRefs.value.forEach(el => observer.observe(el))
  })
})

function animateStat(stat) {
  let count = 0
  const increment = Math.ceil(stat.value / 50)
  const interval = setInterval(() => {
    count += increment
    if (count >= stat.value) count = stat.value
    stat.animatedValue = count
    stat.animatedWidth = (count / stat.value) * 100
    if (count >= stat.value) clearInterval(interval)
  }, 30)
}
</script>

<style scoped>
.stats {
  padding: 80px 20px;
  background: linear-gradient(135deg, #001f3f, #002855);
  color: white;
  text-align: center;
}

.stats-heading {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #00c2ff;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.stat {
  flex: 1 1 250px;
}

.stat-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.stat-bar-container {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}

.stat-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00c2ff, #0077ff);
  border-radius: 10px;
  transition: width 1.5s ease-out;
}

.stat-number {
  font-size: 1rem;
  color: #00c2ff;
  font-weight: bold;
}
</style>