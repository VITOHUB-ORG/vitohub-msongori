<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3>Msongori Limited</h3>
        <p>Expert Water Solutions & Engineering</p>
      </div>
      <div class="footer-center">
        <p>© 2026 All Rights Reserved</p>
        <p>Developed by Nicolaus Buchwa</p>
      </div>
      <div class="footer-right">
        <a href="https://www.facebook.com/msongorilimited" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/msongorilimited" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@msongori_limited" target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
    </div>
    <!-- Animated shapes -->
    <div class="footer-shape shape1"></div>
    <div class="footer-shape shape2"></div>
    
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, #001f3f, #002855);
  color: white;
  padding: 40px 20px;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.footer-left h3 {
  font-size: 1.5rem;
  background: linear-gradient(90deg, #00c2ff, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-left p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.footer-center p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.footer-right a {
  margin: 0 8px;
  color: #00c2ff;
  text-decoration: none;
  transition: 0.3s;
}

.footer-right a:hover {
  color: #c50707;
  transform: scale(1.1);
}

/* Animated shapes */
.footer-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  z-index: 1;
}

.shape1 {
  width: 250px;
  height: 250px;
  background: rgba(0, 194, 255, 0.3);
  top: -50px;
  left: -50px;
  animation: float 7s ease-in-out infinite alternate;
}

.shape2 {
  width: 180px;
  height: 180px;
  background: rgba(255, 0, 0, 0.2);
  bottom: -40px;
  right: -40px;
  animation: float 9s ease-in-out infinite alternate-reverse;
}

@keyframes float {
  0% { transform: translateY(0) translateX(0) rotate(0deg); }
  50% { transform: translateY(-20px) translateX(15px) rotate(180deg); }
  100% { transform: translateY(0) translateX(0) rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-right {
    margin-top: 15px;
  }
}
</style>