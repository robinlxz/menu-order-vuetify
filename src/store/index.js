import Vue from 'vue'
import Vuex from 'vuex'
import OrderServices from '@/services/OrderServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    dishes: [
      {
        id: 1,
        title: '盐焗鸡腿饭',
        price: 6.8,
        size: 1,
        location: 'Lau Pa Sat',
        'english-title': 'Salted Baked Chicken Rice',
        owner: 'Chef Mao',
        category: 'Rice set',
        image: 'https://i.ibb.co/c8VnbwT/food1.jpg'
      },
      {
        id: 5,
        title: '盐焗鸡腿干捞面',
        price: 6.8,
        size: 1,
        location: 'Lau Pa Sat',
        'english-title': 'Salted Baked Chicken dry noodle',
        owner: 'Chef Mao',
        category: 'Noodle set',
        image: 'https://i.ibb.co/tHgCfxV/food2.jpg'
      },
      {
        id: 6,
        title: '鲜茄洋葱牛肉/猪扒',
        price: 15.8,
        size: '2~3',
        location: 'Lau Pa Sat',
        'english-title': 'Tomato and onion beef/pork',
        owner: 'Chef Mao',
        category: 'Cusine (no rice)',
        image: 'https://i.ibb.co/WgYqCyN/food3.jpg'
      }
    ]
  },
  mutations: {
    CLEAR_CART(state) {
      state.cart = []
    },
    PLACE_HOLDER() {}
  },
  actions: {
    clearCartAction({ commit }) {
      commit('CLEAR_CART')
    },
    postOrderAction({ commit, state }, { formObj }) {
      const orderObj = {
        table: formObj,
        order: state.cart.map(item => {
          return { id: item.id, title: item.title }
        })
      }
      console.log('post orderObj', orderObj)
      OrderServices.postOrder(orderObj)
        // .then(() => commit('CLEAR_CART'))
        .then(() => commit('PLACE_HOLDER'))
        .catch(error => {
          console.log('There is error for postOrderAction')
          console.log(error.response)
        })
    }
  },
  modules: {}
})
