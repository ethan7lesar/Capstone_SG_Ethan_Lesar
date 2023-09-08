<template>
  <div>
    <main class="flex flex-col w-fit mx-auto">
      <label for="name">name</label>
      <input
        type="text"
        maxlength="255"
        autocomplete="off"
        required
        v-model="prodName"
        id="name"
      />
      <label for="model">Description</label>
      <input
        type="text"
        id="model"
        maxlength="255"
        autocomplete="off"
        required
        v-model="prodDesc"
      />
      <div class="grid adminGrid">
        <div class="flex flex-col">
          <label for="price">price</label>
          <input type="text" autocomplete="off" required v-model="price" />
        </div>

        <div class="flex flex-col">
          <label for="Year">Production Year</label>
          <input type="number" autocomplete="off" required v-model="prodYear" />
        </div>
        <div class="flex flex-col">
          <label for="price">Creator</label>
          <input type="url" autocomplete="off" required v-model="creator" />
        </div>
        <div class="flex flex-col">
          <label for="price">URL</label>
          <input type="url" autocomplete="off" required v-model="prodUrl" />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div
          id="success"
          class="success bg-green-200 p-3 text-xl h-fit w-fit rounded-md"
        >
          Product Successfully Added ✅
        </div>
        <button
          class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5"
          @click="addProduct"
        >
          submit
        </button>
      </div>
    </main>
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

        const successPop = document.getElementById("success");
        successPop.classList.toggle("show");
        await new Promise((resolve) => {
          setTimeout(() => {
            this.$router.push("/admin");
            resolve();
          }, 2000);
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped></style>
