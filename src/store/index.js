import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    books: []
  },

  mutations: {
    auth(state,payload){
      axios.post('https://jsonplaceholder.typicode.com/users', payload)
      .then((result) => {
          console.log(result);
      }).catch((err) => {
          console.log(err);
      })
    },

    addBook(state,payload){
      axios.post('http://45.77.249.88:3001/api/v1/auth/login ', payload)
      .then(() => {
          console.log("success");
      }).catch((err) => {
          console.log(err);
      })
    },

    deleteBook(state,payload){
      state.books = state.books.filter(book => book.id != payload.id)
    },

    updateBook(state,payload){
      axios.put(`https://jsonplaceholder.typicode.com/users/${payload.id}`, payload)
            .then(() => {
                console.log("success");
            }).catch((err) => {
                console.log(err);
            })
    }
  },

  actions: {
    auth({commit},book){
      commit('auth',book)
    },
    addBook({commit},book){
      commit('addBook',book)
    },
    deleteBook({commit},book){
      commit('deleteBook',book)
    },
    updateBook({commit},book){
      commit('updateBook',book)
    }
  },

  getters:{
    getAllBooks(state){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        for (let index = 0; index < result.data.length; index++) {
          state.books.push(result.data[index])
        }
      }).catch((err) => {
          console.log(err);
      })
      return state.books
    }
  },

  modules: {

  }
})