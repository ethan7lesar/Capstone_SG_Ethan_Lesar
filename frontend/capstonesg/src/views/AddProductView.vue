<template>
  <div>
    <main
      class=" w-fit rounded-[30px] border-main border-[2px] p-10 bg-contrast my-6 mx-auto flex flex-col gap-5 mb-36"
    >
    <h1 class="text-secondary text-[40px] mx-auto">Add Product</h1>
      <div class="flex justify-between gap-5 text-center">
        <label for="name">Name</label>
        <input
          type="text"
          maxlength="255"
          autocomplete="off"
          required
          v-model="prodName"
          id="name"
        />
      </div>

      <div class="flex justify-between gap-5  ">
        <label for="model">Description</label>
        <input
        class=" h-[80px]"
          type="text"
          id="model"
          maxlength="255"
          autocomplete="off"
          required
          v-model="prodDesc"
        />
      </div>

      <div class="flex justify-between gap-5 text-center">
        <label for="price">price</label>
        <input type="text" autocomplete="off" required v-model="price" />
      </div>

      <div class="flex justify-between gap-5 text-center">
        <label for="Year">Production Year</label>
        <input type="number" autocomplete="off" required v-model="prodYear" />
      </div>
      <div class="flex justify-between gap-5 text-center">
        <label for="price">Creator</label>
        <input type="text" autocomplete="off" required v-model="creator" />
      </div>
      <div class="flex justify-between gap-5 text-center">
        <label for="price">URL</label>
        <input type="url" autocomplete="off" required v-model="prodUrl" />
      </div>

      <div class="flex items-center mx-auto">
        <button class=" border-[2px] border-main bg-detail rounded-[30px] p-2 text-[20px]" @click="addProduct">submit</button>
      </div>
    </main>
  </div>
</template>

<script>
  import Swal from 'sweetalert2';
export default {
  data() {
    return {
      prodName: "",
      prodDesc: "",
      price: "",
      prodYear: "",
      creator: "",
      prodUrl: "",
    };
  },
  methods: {
    async addProduct() {
      const productData = {
        prodName: this.prodName,
        prodDesc: this.prodDesc,
        price: this.price,
        prodYear: this.prodYear,
        creator: this.creator,
        prodUrl: this.prodUrl,
      };

      const success = await this.$store.dispatch("addProduct", productData);

      if (success) {
        // alert('Product added successfully!');
        this.prodName = "";
        this.prodDesc = "";
        this.price = "";
        this.prodYear = "";
        this.creator = "";
        this.prodUrl = "";
        Swal.fire({
          icon: "success",
          title: "Product Added Successfully",
          background: "#F6EA00",
          color: "#000000",
        });
        this.$router.push("/admin");
      } else {
        alert("Failed to add product. Please try again.");
      }
    },
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
