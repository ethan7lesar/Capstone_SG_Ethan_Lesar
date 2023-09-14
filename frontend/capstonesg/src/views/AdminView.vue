<template>
  <div class="text-center text-detail text-[50px]"><h1>Admin:</h1></div>
  <div class="flex flex-col gap-5 my-6">
    <h1 class="text-secondary text-[25px] ms-10">Users:</h1>

    <table
      class="w-[95%] text-center border-main border-[2px] rounded-[20px]"
    >
      <thead class="border-primary border-2 text-xl text-detail">
        <tr>
          <th class="py-3" id="userID">ID</th>
          <th>First Name</th>
          <th class="model">Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody
        class="my-5 text-secondary"
        v-for="user of Users"
        :key="user.userID"
        :user="user"
      >
        <td id="userID">{{ user.userID }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.emailAdd }}</td>
        <td>
          <button class=" p-1 rounded-[10px] text-red-600" @click="deleteUser(user.userID)">Delete</button>
        </td>
      </tbody>
    </table>
  </div>
  <div class="flex flex-col gap-5 my-6 mb-36">
    <h1 class="text-secondary text-[25px] ms-10">Products:</h1>
    <router-link to="/admin/products/add" class="ms-auto text-main me-10 border-main rounded-[20px] bg-detail border-[1px] px-7 py-2">
      
        Add Product
    </router-link>

    <table
      class="w-[95%] text-center border-main border-[2px] rounded-[20px] mx-auto"
    >
      <thead class="border-primary border-2 text-xl text-detail">
        <tr>
          <th class="py-3">ID</th>
          <th >Name</th>
          <th class="model" id="out">Creator</th>
          <th id="out">Year</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody
        class="my-5 text-secondary"
        v-for="product of Products"
        :key="product.prodID"
        :product="product"
      >
        <td>{{ product.prodID }}</td>
        <td>{{ product.prodName }}</td>
        <td id="out">{{ product.creator }}</td>
        <td id="out">{{ product.prodYear }}</td>
        <td>{{ product.price }}</td>
        <td class="flex gap-2 justify-center">
          <router-link
            :to="{ name: 'admin edit product', params: { id : product.prodID } }"
            class=" p-1 rounded-[10px] text-detail"
            >Edit</router-link
          >
          <button class="p-1 rounded-[10px] text-red-600" @click="deleteProduct(product.prodID)">Delete</button>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: ["product", "user"],
  computed: {
    Products() {
      return this.$store.state.products;
    },
    userRole() {
      return this.$store.state.userRole;
    },
    product() {
      return this.$store.state.product;
    },
    Users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
  methods: {
    async deleteProduct(productId) {
      const success = await this.$store.dispatch("deleteProduct", productId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch("getProducts");
         // You can dispatch this if you need to refresh the product list.
         Swal.fire({
            title: "Product Deleted Successfully",
            background: "#000000",
            color: "#F6EA00",
          });
      } else {
        alert("Failed to delete product. Please try again.");
      }
    },
    async deleteUser(userId) {
      const success = await this.$store.dispatch("deleteUser", userId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch("getUsers"); // You can dispatch this if you need to refresh the product list.
        Swal.fire({
            title: "User Deleted Successfully",
            background: "#000000",
            color: "#F6EA00",
          });
      } else {
        alert("Failed to delete user. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
a:hover,button:hover {
color: black;
background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

@media screen and (max-width:400px) {
  #userID{
    display: none;
  }
tbody{
  font-size: 9px;
}
thead{
font-size: 15px;
}
 #out{
  display: none;
 } 
}

</style>
