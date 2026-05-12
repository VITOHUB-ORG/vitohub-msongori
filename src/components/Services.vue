<template>
  <section id="services" class="services">
    <h2>Our Services</h2>

    <div class="services-container">
      <!-- Group 1: Water Solutions -->
      <div class="service-card">
        <img src="../assets/Treat.jpeg" alt="Water Treatments">
        <h3>Water Treatments</h3>
        <p>Purification & treatment systems for homes & businesses.</p>
      </div>
      <div class="service-card">
        <img src="../assets/brehole.jpg" alt="Water Pumping & Boreholes">
        <h3>Water Pumping & Boreholes</h3>
        <p>Reliable pumping systems and borehole installation.</p>
      </div>

      <!-- Group 2: Electrical & Lighting -->
      <div class="service-card">
        <img src="../assets/machines.jpg" alt="Lighting Systems">
        <h3>Lighting Systems</h3>
        <p>Design & installation of efficient lighting solutions.</p>
      </div>
      <div class="service-card">
        <img src="../assets/gener3.jpg" alt="Electrical Works">
        <h3>Electrical Works</h3>
        <p>General electrical installations & maintenance.</p>
      </div>

      <!-- Group 3: Plumbing & Pools -->
      <div class="service-card">
        <img src="../assets/plumbing.jpeg" alt="Plumbing Works">
        <h3>Plumbing Works</h3>
        <p>Pipe fittings, leak repairs, and plumbing solutions.</p>
      </div>
      <div class="service-card">
        <img src="../assets/swimming.jpg" alt="Swimming Pool Systems">
        <h3>Swimming Pool Systems</h3>
        <p>Pool design, installation, and maintenance.</p>
      </div>

      <!-- Group 4: Industrial Services -->
      <div class="service-card">
        <img src="../assets/solar2.jpg" alt="Boiler Services">
        <h3>Solar Solution</h3>
        <p>Installation, repair, and maintenance of solar panels system.</p>
      </div>
      <div class="service-card">
        <img src="../assets/filter.jpg" alt="Cooling Tower Services">
        <h3>Cooling Tower Services</h3>
        <p>Industrial cooling systems setup and maintenance.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services {
  padding: 80px 20px;
  background: #f5f5f5;
  text-align: center;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #08b7fc;

}

.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.service-card {
  background: white;
  padding: 20px;
  width: 280px;       /* slightly wider */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center; /* center all content */
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-card img {
  width: 100%;           /* take full card width */
  max-width: 300px;      /* max so it doesn't overflow */
  height: auto;          /* maintain aspect ratio */
  margin-bottom: 20px;
  object-fit: contain;
}
.service-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 0.95rem;
  color: #555;
}
</style>