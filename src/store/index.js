import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(p => p.id === product.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(p => p.id !== productId)
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
})

export default store
