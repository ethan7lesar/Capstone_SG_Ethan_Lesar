<template>
  <h1 class=" text-[50px] mx-auto text-secondary text-center">Cart:</h1>
  <div class="flex flex-col w-fit border-main rounded-[30px] border-[5px] p-10 mx-auto my-10 bg-detail">
  
    <table class=" flex flex-col gap-10">
      <thead>
        <tr class=" flex gap-6">
          <th>Image</th>
          <th>Products</th>
          <th>Description</th>
          <th>Price</th>
          <th>Remove From Cart</th>
        </tr>
      </thead>
      <tbody v-for="product in getCart" :key="product.id" class=" flex gap-3">
        <tr class=" flex gap-6">
          <td>
            <img :src="product.prodUrl" :alt="product.prodName" />
          </td>
          <td>
            {{ product.prodName }}
          </td>
          <td>
            {{ product.prodDesc }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            <button @click="removeFromCart(product.cartID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="mt-5 border-[2px] border-main w-fit p-4 mx-auto text-[20px] rounded-[30px]">Checkout</button>
  </div>
</template>

<script>
export default {
  Name: "setCart",
  computed: {
    getCart() {
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
  },
  mounted() {
    this.$store.dispatch("getCart", this.user.userID);
  },
  methods: {
    removeFromCart(cartID) {
    const userID = this.user.userID;
    
    this.$store.dispatch('removeFromCart', { userID, cartID })
      .then(() => {
        // Optional: Perform any additional actions after successful removal
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  },
  }

};
</script>

<style scoped>


</style>
