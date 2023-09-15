<template>
  <h1 class="text-[50px] mx-auto text-secondary text-center">Cart:</h1>
  <div
    class="flex flex-col mx-[500px] border-main rounded-[30px] border-[5px] p-10  my-10 bg-detail mb-40"
    id="cart"
  >
    <table class="flex flex-col gap-10 w-fit">
      <thead class="mx-auto">
        <tr class="flex gap-14">
          <th class=" ">Image</th>
          <th>Products</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-for="product in Cart" :key="product.id" class="flex gap-3">
        <tr class="flex gap-10 justify-center">
          <td class="w-4/12" id="Image">
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="h-fit rounded-[20px] border-[1px] border-black"
            />
          </td>
          <td class="ps-2">
            {{ product.prodName }}
          </td>
          <td class="me-4">
            {{ product.price }}
          </td>
          <td>
            <button
              class="border-[2px] border-main w-fit p-1 mx-auto rounded-[30px]"
              @click="removeFromCart(product.cartID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link
      to="/cart/checkout"
      class="mt-5 border-[2px] border-main w-fit p-4 mx-auto text-[20px] rounded-[30px]"
      >Checkout</router-link
    >
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  Name: "setCart",
  computed: {
    Cart() {
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

      this.$store
        .dispatch("removeFromCart", { userID, cartID })
        .then(() => {
          // Optional: Perform any additional actions after successful removal
          Swal.fire({
            title: "Item Remove Successfully",
            background: "#000000",
            color: "#F6EA00",
          });
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>

<style scoped>
a:hover,
button:hover {
  color: #f6ea00;
  background: black;
  box-shadow: 0 0 30px 5px black;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
@media screen and (max-width:800px) {
  #cart{
    width: 80%;
    margin: auto;
    margin-bottom: 200px;
  }
  #Image{
    width: 20% !important;
  }
}
@media screen and (max-width: 400px) {

  h1{
    font-size: 30px;
  }
  #cart{
    width: fit-content;
  padding: 0px;
  }

  table{
    font-size: 10px;
    gap: 0;
    padding: 10px;
  }
  tbody{
    gap: 1;
  }
  a{
    font-size: 12px;
    padding: 2px;
    margin-bottom: 10px;
  }

  tr{
    flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1px !important;
  }
  td{
    padding: 0px;
    margin: 0px;
  }
  thead{
    display: none;
  }
  
}


</style>
