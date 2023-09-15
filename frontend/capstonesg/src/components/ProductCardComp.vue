<template>
  <div
    class="card bg-contrast rounded-[30px] border-[1px] border-main flex flex-col justify-center items-center p-5 gap-1 mx-10 mb-6 mt-2 w-10/12"
  >
    <img
      :src="product.prodUrl"
      :alt="product.prodName"
      class="imgArt border-[3px] border-main rounded-[30px] "
    />

    <h2 class="text-[45px] text-detail">{{ product.prodName }}</h2>
    <h5 class="text-[25px] text-secondary uppercase">{{ product.creator }}</h5>
    <router-link
      :to="{ name: 'product', params: { id: product.prodID } }"
      class="rounded-[20px] bg-detail p-2 border-[1px] border-main"
      >View Product</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}


a:hover {
  color: black;
  background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}
@media screen and (max-width:800px) {
  h2{
    font-size: 25px;
  }
  h5{
    font-size: 20px;
  }
  a{
    font-size: 15px;
    padding: 4px;
  }
}
@media screen and (max-width:400px) {
  h2{
    font-size: 30px;
  }
  h5{
    font-size: 20px;
  }
}


</style>
