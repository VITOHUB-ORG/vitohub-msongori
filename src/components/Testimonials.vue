 <template>
  <section id="Testimonials" class="Testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial-container">
      <div class="testimonial-card">
        <p>"Msongori Company installed our water treatment system perfectly. Professional and on time!"</p>
        <h4>-Madam Careen., Arusha</h4>
      </div>

      <div class="testimonial-card">
        <p>"Muundo wa swimming pool yetu ya kuogelea ulizidi matarajio yetu. Tunapendekeza sana wahandisi wao wenye ujuzi mkubwa!"</p>
        <h4>—Eng johnson,Rwiza., Dar es salaam</h4>
      </div>

      <div class="testimonial-card">
        <p>"Kuanzia uchimbaji wa visima hadi huduma za mabomba, kila mradi ulitekelezwa kwa ufanisi. Huduma bora sana!"</p>
        <h4>— Beatrice Amos., Singida</h4>
      </div>

      <div class="testimonial-card">
        <p>"Msongori Company provided top-notch electrical and solar solutions. Truly professional team."</p>
        <h4>— Afred M., Kahama</h4>
      </div>
      
    
    
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.testimonials {
  background: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #0c2035;
}

.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.testimonial-card {
  background: white;
  border-radius: 10px;
  padding: 25px 20px;
  width: 300px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-10px);
}

.testimonial-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.testimonial-card h4 {
  font-size: 0.95rem;
  color: #0c2035;
  font-weight: 600;
}
</style>