<template>
  <main class="main">
    <h1 class="text-center text-[50px] text-secondary">Collections</h1>
    <section v-if="products" class=" grid-col-4">
      <ProductCardComp
        v-for="product of products"
        :key="product.prodID"
        :product="product"
      />
    </section>
    <section v-else>
        loading...
    </section>
  </main>
</template>

<script>
import ProductCardComp from "@/components/ProductCardComp.vue";

export default {
  components: { ProductCardComp },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
  methods: {},
};
</script>

<style scoped>
.main {
  background: conic-gradient(
    from 195deg at 60.1% 50%,
    #000 9.815694093704224deg,
    rgba(32, 32, 32, 0.8) 64.75907742977142deg,
    #202020 109.22781229019165deg
  );
}
</style>
