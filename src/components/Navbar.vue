<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/msongo.png" alt="Msongori Logo" />
    </div>

    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#Testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00c2ff;
  color: white;
  padding: 15px 40px;
  z-index: 1000;
}

.logo img {
  height: 125px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #d40f0f;
}

/* Optional: Add smooth scroll effect for old browsers */
html {
  scroll-behavior: smooth;
}
</style>