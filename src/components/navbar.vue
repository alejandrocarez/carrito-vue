<template>
  <nav class="navbar">
    <router-link to="/">Inicio</router-link>
    <router-link to="/checkout">Carrito ({{ cartCount }})</router-link>
    <span v-if="user">
      <span>Hola, {{ user.email }}</span>
      <button @click="logout">Cerrar sesión</button>
    </span>
    <router-link v-else to="/login">Login</router-link>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters(['cartItems']),
    cartCount() {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    }
  },
  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (currentUser) => {
      this.user = currentUser
    })
  },
  methods: {
    async logout() {
      const auth = getAuth()
      await signOut(auth)
      this.user = null
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #42b983;
  color: white;
}
a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}
button {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
}
</style>
