// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
};
// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.products.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
};
// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++
  },
};
// actions
const actions = {
  addProductToCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', {id: product.id})
    } else {
      commit('incrementItemQuantity', cartItem)
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
