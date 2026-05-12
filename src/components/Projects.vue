<template>
  <section id="projects" class="projects">
    <h2>Our Projects</h2>

    <!--  VIDEO SECTION -->
    <div class="projects-container">
      <div class="project-card">
        <video controls>
          <source src="../assets/video-water.mp4" type="video/mp4">
        </video>
        <div class="project-info">
          <h3>Water Treatment Installation</h3>
          <p>Professional installation of water treatment systems in Dodoma.</p>
        </div>
      </div>

      <div class="project-card">
        <video controls>
          <source src="../assets/video-pool.mp4" type="video/mp4">
        </video>
        <div class="project-info">
          <h3>Swimming Pool Design</h3>
          <p>Modern swimming pool design and construction in Dar es salaam.</p>
        </div>
      </div>

      <div class="project-card">
        <video controls>
          <source src="../assets/video-fountain.mp4" type="video/mp4">
        </video>
        <div class="project-info">
          <h3>Garden Fountain System</h3>
          <p>Creative garden fountain installation project.</p>
        </div>
      </div>
    </div>

    <!-- IMAGE SECTION -->
    <div class="projects-container">
      <div class="project-card">
        <img src="../assets/pool1.jpeg" alt="Pool Plumbing">
        <div class="project-info">
          <h3>Pool Plumbing System</h3>
          <p>Professional plumbing installation for swimming pools.</p>
        </div>
      </div>

      <div class="project-card">
        <img src="../assets/pool2.jpeg" alt="Pool Installation">
        <div class="project-info">
          <h3>Swimming Pool Installation</h3>
          <p>High-quality pool system installation and finishing.</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.projects {
  padding: 80px 20px;
  background: #fff;
  text-align: center;
}

.projects h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #09b6fa;
}

/* layout */
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

/* card */
.project-card {
  width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  background: #f5f5f5;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
}

/* video */
.project-card video {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* image */
.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* text */
.project-info {
  padding: 15px;
}

.project-info h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.project-info p {
  font-size: 0.95rem;
  color: #555;
}
</style>