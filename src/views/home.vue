<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h1>Tienda Online</h1>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>\${{ product.price }}</p>
        <button @click="addToCart(product)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProducts } from '../api/products'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    this.products = await fetchProducts()
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product)
    }
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
}
.product {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
}
.product img {
  width: 100px;
  height: auto;
}
button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
}
</style>