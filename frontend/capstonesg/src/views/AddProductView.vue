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
          v-model="productData.prodName"
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
          v-model="productData.prodDesc"
        />
      </div>

      <div class="flex justify-between gap-5 text-center">
        <label for="price">price</label>
        <input type="number" autocomplete="off" required v-model="productData.price" />
      </div>

      <div class="flex justify-between gap-5 text-center">
        <label for="Year">Production Year</label>
        <input type="number" autocomplete="off" required v-model="productData.prodYear" />
      </div>
      <div class="flex justify-between gap-5 text-center">
        <label for="price">Creator</label>
        <input type="text" autocomplete="off" required v-model="productData.creator" />
      </div>
      <div class="flex justify-between gap-5 text-center">
        <label for="price">URL</label>
        <input type="url" autocomplete="off" required v-model="productData.prodUrl" />
      </div>

      <div class="flex items-center mx-auto">
        <button class=" border-[2px] border-main bg-detail rounded-[30px] p-2 text-[20px]" @click.prevent="addProduct">submit</button>
      </div>
    </main>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      productData: {
        prodName: "",
        prodDesc: "",
        price: "",
        prodYear: "",
        creator: "",
        prodUrl: "",
      }
    };
  },
  methods: {
     addProduct() {
    

      this.$store.dispatch("addProduct", this.productData);

      // if (success) {
      //   // alert('Product added successfully!');
      //   this.prodName = "";
      //   this.prodDesc = "";
      //   this.price = "";
      //   this.prodYear = "";
      //   this.creator = "";
      //   this.prodUrl = "";
      //   Swal.fire({
      //     icon: "success",
      //     title: "Product Added Successfully",
      //     background: "#000000",
      //       color: "#F6EA00",
      //   });
      //   this.$router.push("/admin");
      // } else {
      //   alert("Failed to add product. Please try again.");
      // }
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
button:hover {
  color: black;
  background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

@media screen and (max-width: 400px) {
  input {
    width: fit-content;
    height: fit-content;
    font-size: 12px;
    padding-left: 2px;
    padding: 0px;
  }

  label {
    font-size: 12px;
  }
  h1 {
    font-size: 30px;
  }
  button {
    font-size: 15px;
    padding: 2px;
  }
  a {
    font-size: 15px;
  }

  main{
    padding-inline: 8px !important;
  }
}
</style>
