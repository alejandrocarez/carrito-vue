<template>
  <div class="checkout">
    <h1>Tu Carrito</h1>
    <div v-if="cartItems.length">
      <div v-for="item in cartItems" :key="item.id" class="item">
        <p>{{ item.title }} (x{{ item.quantity }}) — ${{ item.price }}</p>
        <button @click="removeFromCart(item.id)">Eliminar</button>
      </div>
      <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
      <button @click="clearCart">Finalizar compra</button>
    </div>
    <p v-else>El carrito está vacío.</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Checkout',
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART', 'CLEAR_CART']),
    removeFromCart(id) {
      this.REMOVE_FROM_CART(id)
    },
    clearCart() {
      this.CLEAR_CART()
      alert('Compra simulada realizada con éxito 🎉')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: 2rem auto;
}
.item {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
}
button {
  background-color: #f44336;
  color: white;
  padding: 0.3rem 0.6rem;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
}
</style>