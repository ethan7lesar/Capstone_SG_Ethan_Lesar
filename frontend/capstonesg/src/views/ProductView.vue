<template>
  <div class="main mb-28 mt-10 px-28">
    <div v-if="product" class="flex h-[65vh] product" >
      <div class="ms-20 mt-20 relative w-[50%] img">
        <img
          :src="product.prodUrl"
          :alt="product.prodName"
          class="rounded-[30px] absolute top-[-10%] z-10 right-[31%] border-main border-[2px] w-80"
          id="image"
        />
        <img
          src="https://i.postimg.cc/L5YzqcFv/Ellipse-6.png "
          alt="podium"
          class="absolute bottom-0"
          id="podium"
        />
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="text-[60px] text-detail">{{ product.prodName }}</h1>
        <div class="flex gap-3">
          <h6 class="text-center text-[40px] text-secondary prouct-name">
            By {{ product.creator }}
          </h6>
          <h1 class="number text-secondary text-[60px] border-main ms-5">
            #{{ product.prodID }}
          </h1>
        </div>
        <p class="text-secondary text-[15px] w-72">
          {{ product.prodDesc }}
        </p>
        <h6 class="text-[22px] text-secondary">R{{ product.price }}</h6>

        <div class="flex gap-20 mx-3 mt-5 buttons">
          <router-link
            to="/products"
            class="border-[1px] border-detail px-7 py-2 text-detail rounded-[20px]"
            >Back</router-link
          >
          <button
            class="border-main rounded-[20px] bg-detail border-[1px] px-7 py-2"
            @click="addToCart(id)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div v-else class=" flex justify-center items-center">
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Swal from "sweetalert2";

export default {
  components: { Loader },
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.userData;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  // mounted() {
  //   this.$store.dispatch("getProduct", this.$route.params.id);
  // },
  methods: {
    addToCart(productID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the addToCart action with userID and prodID
        this.$store.dispatch("addToCart", {
          userID: this.userData.userID,
          productID,
        });
        Swal.fire({
          icon: "success",
          title: "Product Added To Cart Successfully",
          background: "#000000",
            color: "#F6EA00",
        });
        this.$router.push("/cart");
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
  },
};
</script>

<style scoped>

#image{
  animation: hover 1.2s linear infinite ;
}
.prouct-name{
  text-transform: uppercase;
}
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

#image {
  box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.25);
}


a:hover,button:hover {
  color: black;
  background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

@keyframes hover {
  0%, 100%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(8px);
  }
}

@media screen and (max-width:800px) {
  #podium{
    display: none;
  }
  .number{
    font-size: 30px;
  }
  .product{
    flex-direction: column;
    margin: 0px;
  }
  div{
    margin: 0px;

  }
  #image{
    position: static !important;
    bottom: 0;
    top: 0;
    z-index: 0 !important;
    margin-left: 65px !important;
  margin: auto !important;
  
  }
  h1{
    font-size: 40px;
    margin: auto;
  }

  h6{
    font-size: 30px;
    padding-left: 5px;
  }
  p{
    font-size: 15px;
    padding-left: 5px;
  }
  a, button{
    padding: 8px;
    margin: 0px;
    font-size: 20px;
    position: static;
  }
  .buttons{
    margin-bottom: 300px !important;
  }
  .main{
    margin-bottom: 300px !important;
  }

 .img{
  margin: auto;
 }

}
@media screen and (max-width:400px) {
  #podium{
    display: none;
  }
  .number{
    font-size: 30px;
  }
  .product{
    flex-direction: column;
    margin: 0px;
  }
  div{
    margin: 0px;
    padding: 0px;

  }
  #image{
    position: static !important;
    bottom: 0;
    z-index: 0 !important;
    margin-left: 65px !important;
  margin: auto !important;
  
  }
  h1{
    font-size: 40px;
    margin: auto;
  }

  h6{
    font-size: 20px;
    padding-left: 5px;
  }
  p{
    font-size: 15px;
    padding-left: 5px;
  }
  a, button{
    padding: 3px;
    margin: 0px;
    font-size: 10px;
    position: static;
  }
  .buttons{
    margin-bottom: 300px !important;
  }
  .main{
    margin-bottom: 100px !important;
  }

 .img{
  margin: auto;
 }
}



</style>
