<!-- src/views/Login.vue -->
<template>
  <div class="login">
    <h1>Acceso</h1>

    <form @submit.prevent="handleLogin">
      <h2>Iniciar Sesión</h2>
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button>Iniciar Sesión</button>
    </form>

    <form @submit.prevent="handleRegister">
      <h2>Registrarse</h2>
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button>Registrarse</button>
    </form>

    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { loginUser, registerUser } from '../firebase/authService'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        await loginUser(this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.message
      }
    },
    async handleRegister() {
      try {
        await registerUser(this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.message
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}
</style>
