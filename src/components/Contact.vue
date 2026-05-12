<template>
  <section id="contact" class="contact">
    <div class="contact-container">

      <!-- Contact Info -->
      <div class="contact-info">
        <h2>Contact Us</h2>
        <p>Reach out to Msongori Limited for expert water & engineering solutions. Offices: Kigamboni, Dar es Salaam.</p>

        <ul class="contact-details">
          <li>
            <i class="fas fa-phone-alt"></i>
            <span>+255 768 812 812 | +255 622 812 812</span>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <span>office@msongorilimited.com</span>
          </li>
          <li>
            <i class="fab fa-whatsapp"></i>
            <button class="whatsapp-btn" @click="openWhatsApp">
              Chat with us on WhatsApp
            </button>
          </li>
          <li>
            <span>Follow us:</span>
            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>

      <!-- Contact Form -->
      <form class="contact-form" @submit.prevent="sendMessage">
        <input type="text" placeholder="Your Name" v-model="name" required />
        <input type="email" placeholder="Your Email" v-model="email" required />
        <textarea placeholder="Your Message" v-model="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// WhatsApp
const whatsappNumber = '+255768812812'

const openWhatsApp = () => {
  const text = encodeURIComponent("Hello, I want to contact Msongori Limited.")
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank")
}

// Form
const name = ref('')
const email = ref('')
const message = ref('')

const sendMessage = async () => {
  try {
    const res = await axios.post('http://localhost:5000/send-message', {
      name: name.value,
      email: email.value,
      message: message.value
    })

    if (res.data.success) {
      alert('Message sent successfully ✅')
      name.value = ''
      email.value = ''
      message.value = ''
    }
  } catch (error) {
    alert('Failed to send message ❌')
    console.error(error)
  }
}
</script>

<style scoped>
.contact {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #001f3f, #002855);
  color: white;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
}

/* Contact Info */
.contact-info {
  flex: 1 1 350px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-info h2 {
  font-size: 2.5rem;
  background: linear-gradient(90deg, #00c2ff, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-details li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.contact-details li i {
  color: #00c2ff;
}

/* WhatsApp Button */
.whatsapp-btn {
  padding: 8px 15px;
  background: #25D366;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.whatsapp-btn:hover {
  background: #128C7E;
}

/* Form */
.contact-form {
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
}

.contact-form button {
  padding: 12px;
  background: #00c2ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>