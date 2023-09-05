<template>
  <div class="main mb-28 mt-10 px-28">
    <div v-if="product" class="flex">
      <div class="ms-20 mt-20 relative w-[50%]">
        <img
          :src="product.prodUrl"
          :alt="product.prodName"
          class="rounded-[30px] absolute top-[-10%] z-10 right-[31%] border-main border-[2px]"
          id="image"
        />
        <img src="https://i.postimg.cc/L5YzqcFv/Ellipse-6.png " alt="podium" class="absolute bottom-0">
      </div>
      <div class=" flex flex-col gap-1">
        <h1 class="text-[60px] text-detail">{{ product.prodName }}</h1>
        <div class="flex gap-3">
          <h6 class="text-center text-[50px] text-secondary">
            By {{ product.creator }}
          </h6>
          <h1 class="number text-secondary text-[60px] border-main ms-5">
            #{{ product.prodID }}
          </h1>
        </div>
        <p class="text-secondary text-[15px] w-72">
          {{ product.prodDesc }}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          fugit ullam, adipisci repellendus provident recusandae architecto
          nihil quaerat deleniti animi nisi ad sed aperiam reprehenderit at
          quas! Consectetur, ducimus architecto.
        </p>
        <h6 class="text-[22px] text-secondary">R{{ product.price }}</h6>

        <div class="flex gap-20 mx-3 mt-5">
          <router-link
            to="/products"
            class="border-[1px] border-detail px-7 py-2 text-detail rounded-[20px]"
            >Back</router-link
          >
          <button
            class="border-main rounded-[20px] bg-detail border-[1px] px-7 py-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  // methods: {
  //     addToCart (product) {
  //         this.$store.dispatch('addToCart', product)
  //     }

  // },
};
</script>

<style scoped>
.main {
  background: conic-gradient(
    from 31deg at 60.1% 50%,
    #000 9.815694093704224deg,
    rgba(32, 32, 32, 0.8) 64.75907742977142deg,
    #202020 109.22781229019165deg
  );
}

.number {
  font-weight: 400;
  font-style: normal;
  line-height: normal;
}

#image{
  box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.25);
}

</style>
