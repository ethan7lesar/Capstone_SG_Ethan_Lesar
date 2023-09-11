<template>
  <div>
    <div v-if="product">
      <main
        class="w-fit rounded-[30px] border-main border-[2px] p-10 bg-contrast my-6 mx-auto flex flex-col gap-5 mb-36"
      >
        <h1 class="text-secondary text-[40px] mx-auto">Edit Product</h1>
        <div class="flex justify-between gap-5 text-center">
          <label for="name">Name</label>
          <input
            type="text"
            maxlength="255"
            autocomplete="off"
            required
            v-model="product.prodName"
            :placeholder="product.prodName"
          />
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label for="model">Description</label>
          <input
            type="text"
            id="model"
            maxlength="255"
            autocomplete="off"
            required
            v-model="product.prodDesc"
            :placeholder="product.prodDesc"
          />
        </div>

        <div class="flex justify-between gap-5 text-center">
          <label for="price">price</label>
          <input
            type="number"
            autocomplete="off"
            required
            v-model="product.price"
            :placeholder="product.price"
          />
        </div>

        <div class="flex justify-between gap-5 text-center">
          <label for="price">Creator</label>
          <input
            type="url"
            autocomplete="off"
            required
            v-model="product.creator"
            :placeholder="product.creator"
          />
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label for="Year">Production Year</label>
          <input
            type="number"
            autocomplete="off"
            required
            v-model="product.prodYear"
            :placeholder="product.prodYear"
          />
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label for="price">URL</label>
          <input
            type="url"
            autocomplete="off"
            required
            v-model="product.prodUrl"
            :placeholder="product.prodUrl"
          />
        </div>

        <div class="flex items-center mx-auto">
          <button class=" border-[2px] border-main bg-detail rounded-[30px] p-2 text-[20px]" @click="updateProduct">submit</button>
        </div>
      </main>
    </div>
    <div v-else class="flex justify-center items-center">
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Swal from "sweetalert2";

export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  data() {
    return {
      data: {
        prodName: "",
        prodDesc: "",
        price: "",
        creator: "",
        prodYear: "",
        prodUrl: "",
      },
    };
  },
  methods: {
    updateProduct() {
      const data = {
        id: this.product.prodID,
        prodName: this.product.prodName,
        prodDesc: this.product.prodDesc,
        price: this.product.price,
        creator: this.product.creator,
        prodYear: this.product.prodYear,
        prodUrl: this.product.prodUrl,
      };

      // Dispatch the action to update the product
      this.$store
        .dispatch("updateProduct", data)
        .then((success) => {
          console.log("updatedProduct", data);
          if (success) {
            this.$router.push("/admin");
            // success message
            Swal.fire({
              title: "Changes Saved Successfully",
              background: "#000000",
              color: "#F6EA00",
            });
          } else {
            // failed message
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  props: ["id"],

  mounted() {
    this.$store.dispatch("getProduct", this.id),
      this.$store.dispatch("getProducts");
  },

  components: {
    Loader,
  },
};
</script>

<style scoped>
input {
  border-radius: 20px;
  border: 1px solid rgba(246, 234, 0, 0.83);
  background: linear-gradient(0deg, #000 0%, #000 100%), rgba(246, 234, 0, 0);
  width: fit-content;
  margin-block-end: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  color: white;
  font-family: "Archivo Black", sans-serif;
  padding-left: 18px;
}

label {
  color: #f6ea00;
  font-size: larger;
}

main:hover {
  box-shadow: 0px 10px 4px 0px #f6ea00;
}
main {
  transition: 0.8s;
}
</style>
