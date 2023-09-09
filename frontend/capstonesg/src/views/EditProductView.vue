<template>
  <div>
    <div v-if="product" >
      <main class="flex flex-col w-1/3 mx-auto">
        <label for="name">Name</label>
        <input
          type="text"
          maxlength="255"
          autocomplete="off"
          required
          v-model="product.prodName"
          id="name"
        />
        <label for="model">Description</label>
        <input
          type="text"
          id="model"
          maxlength="255"
          autocomplete="off"
          required
          v-model="product.prodDesc"
        />
        <div class="grid adminGrid">
          <div class="flex flex-col">
            <label for="price">price</label>
            <input
              type="text"
              autocomplete="off"
              required
              v-model="product.price"
            />
          </div>

          <div class="flex flex-col">
            <label for="Year">Production Year</label>
            <input
              type="number"
              autocomplete="off"
              required
              v-model="product.prodYear"
            />
          </div>
          <div class="flex flex-col">
            <label for="price">Creator</label>
            <input
              type="url"
              autocomplete="off"
              required
              v-model="product.creator"
            />
          </div>
          <div class="flex flex-col">
            <label for="price">URL</label>
            <input
              type="url"
              autocomplete="off"
              required
              v-model="product.prodUrl"
            />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <button
            class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5"
            @click="updateProduct"
          >
            submit
          </button>
        </div>
      </main>
    </div>
    <div v-else>
loading...
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Loader from '@/components/Loader.vue'

export default {
  data() {
    return {
      prodName: "",
      prodDesc: "",
      price: "",
      creator: "",
      prodYear: "",
      prodUrl: "",
    };
  },
  // components: {
  //     Loader
  // },
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id),
      this.$store.dispatch("getProducts");
  },
  methods: {
    async updateProduct() {
      try {
        // console.log( this.product.prodYear )
        await axios.put(
          `https://sg-backend-9zyd.onrender.com/products/${this.$route.params.id}`,
          {
            prodName: this.product.prodName,
            prodDesc: this.product.prodDesc,
            price: this.product.price,
            creator: this.product.creator,
            prodYear: this.product.prodYear,
            prodUrl: this.product.prodUrl,
          }
        );
        this.prodName = "";
        this.prodDesc = "";
        this.price = "";
        this.creator = "";
        this.prodYear = "";
        this.prodUrl = "";
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped></style>
