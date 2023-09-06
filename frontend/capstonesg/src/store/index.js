import { createStore } from "vuex";
import axios from "axios";
const URL = "https://sg-backend-9zyd.onrender.com"
import Cookies from "js-cookie"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    userData: null,
    userRole: null,
    message: null,
    error: null,
    regStatus: null,
    logStatus: null,
  },
  getters: {
    // cartProducts (state, getters) {
    //   return state.
    // }
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setcartItems: (state, cartItems) => {
      state.cart = cartItems;
    },
    addProduct(state, product) {
      state.products.push(product); // Add the new product to the list.
    },
    // Mutations to modify the cart state
    addToCart(state, product) {
      state.cartItems.push({ product, quantity: 1 });
    },
    deleteProduct(state, productId) {
      // Remove the product with the given ID from the products list.
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },


    clearCart(state) {
      state.cartItems = [];
    },
    updateProduct(state, updatedProduct) {
      // Find the product in the state by its ID and update it
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },

    setRegStatus(state, status) {
      state.regStatus = status;
    },
    setLogStatus(state, status) {
      state.logStatus = status;
    },
    setToken(state, token) {
      state.token = token;
      Cookies.set("userToken", token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "None",
      });
    },
    setUserData(state, userData) {
      state.userData = userData;
      if (userData && userData.userRole) {
        state.userRole = userData.userRole;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData, userData.userRole);
      } else {
        state.userData = null;
        state.userRole = null;
        localStorage.removeItem("userData");
      }
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://sg-backend-9zyd.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("https://sg-backend-9zyd.onrender.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
        
    },
    getUsers: async (context) => {
      fetch("https://sg-backend-9zyd.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch(
          `https://sg-backend-9zyd.onrender.com/users/${id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },

    async addProduct({ commit }, productData) {
      try {
        // Make the POST request to add the product.
        const response = await axios.post(
          "https://sg-backend-9zyd.onrender.com/products/",
          productData
        );

        // Commit the mutation to update the state with the new product.
        commit("addProduct", response.data);

        return true; // Indicate success.
      } catch (err) {
        console.error(err);
        return false; // Indicate failure.
      }
    },
    async deleteProduct({ commit }, productId) {
      try {
        // Make the DELETE request to remove the product.
        await axios.delete(
          `https://sg-backend-9zyd.onrender.com/products/${productId}`
        );

        // Commit the mutation to delete the product from the state.
        commit("deleteProduct", productId);

        return true; // Indicate success.
      } catch (err) {
        console.error(err);
        return false; // Indicate failure.
      }
    },

    addToCart({ commit, state }, product) {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === product.id
      );
      if (cartItem) {
        commit("incrementItemQuantity", cartItem);
      } else {
        commit("addToCart", product);
      }
    },

    clearCart({ commit }) {
      commit("clearCart");
    },

    async updateProduct({ commit }, updatedProductData) {
      try {
        const response = await axios.put(
          `https://sg-backend-9zyd.onrender.com/product/${updatedProductData.id}`,
          updatedProductData
        );

        // Commit the mutation to update the product in the state
        commit("updateProduct", response.data);

        return true; // Indicate success
      } catch (error) {
        console.error(error);
        return false; // Indicate failure
      }
    },
    async register(context, payload) {
      console.log("Reached");
      try {
        const res = await axios.post(`${URL}/register`, payload);
        console.log("Res: ", res.data);
        const { message, err, token } = res.data;
        if (message === "An error occured") {
          context.commit("setError", message);
          context.commit("setRegStatus", "Not registered");
          return { success: false, error: message };
        } else if (token) {
          context.commit("setToken", token);
          context.commit("setRegStatus", "Registered successfully");
          return { success: true, token };
        } else if (err) {
          console.error(err);
        }
      } catch (e) {
        context.commit("setError", e);
        console.log(e);
        context.commit("setRegStatus", "Not registered");
        throw e;
      }
    },

    async login(context, payload) {
      try {
        const res = await axios.post(`https://sg-backend-9zyd.onrender.com/login`, payload);
        console.log("Res: ", res.data.status);
        const { err, message, token, result } = res.data;
        console.log(result);
        if (message === "Unregistered user or incorrect password!") {
          context.commit("setError", message);
          context.commit("setLogStatus", "Not logged in");
          return { success: false, error: message };
        }
        if (message && token && result) {
          context.commit("setUser", result);
          context.commit("setToken", token);
          context.commit("setUserData", result);
          context.commit("setLogStatus", "Logged in!");
          Cookies.set("userToken", token, {
            expires: 1,
          });
          return { success: true, token, result };
        } else if (err) {
          context.commit("setError", err);
          return { success: false, error: err };
        } else {
          context.commit("setError", "Unknown error during login");
          context.commit("setLogStatus", "not logged in");
          return { success: false, error: "Unknown error" };
        }
      } catch (err) {
        console.log("Error")
      }
    },
    cookieCheck(context) {
      const token = Cookies.get("userToken");
      if (token) {
        context.commit("setToken", token);
      }
    },
    init(context) {
      context.dispatch("cookieCheck");
    },
    async logout(context) {
      context.commit("setToken", null);
      context.commit("setUser", null);
      context.commit("setUserData", null);
      Cookies.remove("userToken");
    },

    cookieCheck(context) {
      const token = Cookies.get("userToken");
      if (token) {
        context.commit("setToken", token);
      }
    },
    init(context) {
      context.dispatch("cookieCheck");
    },
    async logout(context) {
      context.commit("setToken", null);
      context.commit("setUser", null);
      context.commit("setUserData", null);
      Cookies.remove("userToken");
    },

  },
  modules: {},
});
