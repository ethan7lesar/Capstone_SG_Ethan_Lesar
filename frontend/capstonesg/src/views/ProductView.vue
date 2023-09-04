<template>
  <div class="main my-32 px-28">
    <div v-if="product" class="flex">
      <div class="ms-20 mt-20">
        <img
          :src="product.prodUrl"
          :alt="product.prodName"
          class="rounded-[30px]"
        />
        <div class="podium"></div>
      </div>
      <div class="ms-80 flex flex-col gap-1">
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
        <h6 class=" text-[22px] text-secondary"> R{{ product.price }}</h6>

        <div class="flex gap-20 mx-3 mt-5">
          <router-link to="/products" class="border-[1px] border-detail px-7 py-2 text-detail rounded-[20px]">Back</router-link>
          <button class=" border-main rounded-[20px] bg-detail border-[1px] px-7 py-2">Add to cart</button>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.id),
      this.$store.dispatch("fetchProducts");
  },
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

.podium {
  border-radius: 556px;
  border: 1px solid #323232;
  background: rgba(217, 217, 217, 0);
  box-shadow: 0px 4px 4px 4px #f6ea00;
}
</style>
