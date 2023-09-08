<template>
    <div class=" text-center text-detail text-[50px]"><h1>Admin:</h1></div>
  <div class="flex flex-col gap-5 my-6">
 <h1 class=" text-secondary text-[25px] ms-10">Products:</h1>
    <router-link to="/admin/products/add" class="ms-auto">
      <button class="bg-primary text-light py-2 px-5 rounded-sm me-4">
        Add Product
      </button>
    </router-link>

    <table class=" w-[95%] text-center border-main border-[2px] rounded-[20px] mx-auto">
      <thead class="border-primary border-2 text-xl">
        <tr>
          <th class="py-3">ID</th>
          <th>Name</th>
          <th class="model">Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody
        class="my-5"
        v-for="product of Products"
        :key="product.prodID"
        :product="product"
      >
        <td>{{ product.prodID }}</td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.creator }}</td>
        <td>{{ product.prodYear }}</td>
        <td>{{ product.price }}</td>
        <td><button class="mx-4">Edit</button><button @click= deleteProduct(product.prodID)>Delete</button></td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    Products() {
      return this.$store.state.products;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    async deleteProduct(productId) {
      const success = await this.$store.dispatch('deleteProduct', productId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch('getProducts'); // You can dispatch this if you need to refresh the product list.
      } else {
        alert('Failed to delete product. Please try again.');
      }
    },
  },
};
</script>

<style scoped></style>
