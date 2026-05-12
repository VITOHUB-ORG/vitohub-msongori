<template>
  <section id="about" class="about">
    <div class="about-content">
      <div class="about-text">
        <h2>About Us</h2>
        <p>
         Msongori Limited, founded by Engineer Godfrey John Oisso and based in Kigamboni, Dar es Salaam, provides reliable water solutions and engineering services across Tanzania. We specialize in water treatment, borehole drilling, electrical works, plumbing, swimming pools, industrial services, and solar solutions, delivering professional, efficient, and sustainable services to every client.
        </p>
        <p>With years of experience and a team of skilled engineers, we ensure every project is completed on time, within budget, and to the highest standards, empowering clients with safe, efficient, and modern engineering solutions.
        </p>
      </div>
      <div class="about-image">
        <img src="../assets/into.jpeg" alt="About Msongori">
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 80px 20px;
  background: #e8f0f8;


  scroll-margin-top: 140px; /* adjust based on navbar height */
}


.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.about-text {
  flex: 1 1 400px;
  max-width: 500px;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #06b5fa;
}

.about-text p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
}

.about-image {
  flex: 1 1 300px;
  max-width: 400px;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
</style>