import { createStore } from 'vuex'

const productsUrl = 'https://sg-backend-9zyd.onrender.com/products/'
const usersUrl = 'https://sg-backend-9zyd.onrender.com/users/'

export default createStore({
  state: {
    products: null,
    product: null
  },
  mutations: {
    setProducts: ( state, value ) => {
      state.products = value
    },
    setProduct: ( state, value ) => {
      state.product = value
    },
    setUsers: ( state, value ) => {
      state.users = value
    },
    setUser: ( state, value ) => {
      state.user = value
    }
  },
  actions: {
    async fetchProducts( context ){
      try {
        let  products  = await ( await fetch(productsUrl)).json()
        console.log( products )
        if ( products ){
          context.commit( "setProducts", products )
        } else {
          context.commit(alert("There was an error fetching products"))
        }
      } catch ( error ) {
        alert( error )
      }
    },
    async fetchProduct( context, id ){
      try {
        let product = await ( await fetch( productsUrl + id )).json()
        console.log( product )
        if ( product ){
          context.commit( "setProduct", product )
        } else {
          context.commit( alert("Product not found"))
        }
      } catch( error ){
        alert( error )
      }
    },
    async fetchUsers( context ){
      try {
        let  users  = await ( await fetch(usersUrl)).json()
        console.log( users )
        if ( users ){
          context.commit( "setUsers", users )
        } else {
          context.commit(alert("There was an error fetching Users"))
        }
      } catch ( error ) {
        alert( error )
      }
    },
    async fetchUser( context, id ){
      try {
        let  user  = await ( await fetch( usersUrl + id )).json()
        console.log( user[0] )
        if ( user ){
          context.commit( "setUser", user[0] )
        } else {
          context.commit( alert("User not found"))
        }
      } catch( error ){
        alert( error )
      }
    }
  }
})
