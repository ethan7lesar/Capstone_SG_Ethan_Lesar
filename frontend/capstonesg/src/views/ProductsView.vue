<template>
  <main class="main">
    <h1 class="text-center text-[50px] text-secondary">Collections</h1>
    <div class="flex gap-56 px-5 mt-3 sorts">
      <input
      type="search"
        v-model="searchTerm"
        placeholder="Search Collectables"
        class="rounded-[20px] w-[289px] h-[45px] flex-shrink-0 bg-contrast border-datail ps-3 border-detail text-detail border-[2px]"
      />
      <div class="">
        <select
          id="sort-select"
          v-model="selectedSort"
          class="bg-detail rounded-[20px] p-3"
        >
          <option value="options">Sort options</option>
          <option value="alphabetical">Sort Alphabetically</option>
          <option value="price-high">Sort by Price (High to Low)</option>
          <option value="price-low">Sort by Price (Low to High)</option>
        </select>
      </div>
      <div class="my-auto flex text-detail gap-4 buttons">
        <button
          type="button"
          class="filter-btn rounded-[25px] border-[2px] p-2 border-detail"
          :class="{ 'active-btn': selectedFilter === 'all' }"
          @click="selectFilter('all')"
        >
          ALL
        </button>
        <button
          type="button"
          class="filter-btn rounded-[25px] border-[2px] p-2 border-detail"
          :class="{ 'active-btn': selectedFilter === 'lonesamurai' }"
          @click="selectFilter('lonesamurai')"
        >
          Lone Samuari
        </button>
        <button
          type="button"
          class="filter-btn rounded-[25px] border-[2px] p-2 border-detail"
          :class="{ 'active-btn': selectedFilter === 'sharktank' }"
          @click="selectFilter('sharktank')"
        >
          Shark Tank
        </button>
        <button
          type="button"
          class="filter-btn rounded-[25px] border-[2px] p-2 border-detail"
          :class="{ 'active-btn': selectedFilter === 'cyberpunk' }"
          @click="selectFilter('cyberpunk')"
        >
          Cyber Punk
        </button>
        <button
        type="button"
        class="filter-btn rounded-[25px] border-[2px] p-2 border-detail"
        :class="{ 'active-btn': selectedFilter === 'rockstar' }"
        @click="selectFilter('rockstar')"
      >
        RockStar
      </button>
      </div>
    </div>
    <section v-if="filteredProducts.length > 0" class="grid grid-cols-3 mt-3 products">
      <ProductCardComp
        v-for="product of filteredProducts"
        :key="product.prodID"
        :product="product"
        class=" mx-auto"
      />
    </section>
    <section v-else class=" flex justify-center items-center"><Loader/></section>
  </main>
</template>

<script>
import ProductCardComp from "@/components/ProductCardComp.vue";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "options",
      products: [],
      searchTerm: "",
    };
  },
  computed: {
    Products() {
      return this.$store.state.products;
    },
    sortedProducts() {
      let sorted = this.Products;
      // const sorted.
      if (this.selectedFilter && this.selectedFilter !== "all") {
        sorted = sorted.filter(
          (product) => product.creator === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "price-high") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === "price-low") {
        sorted.sort((a, b) => a.price - b.price);
      }

      return sorted;
    },

    // Create a computed property to filter products based on the search term
    filteredProducts() {
      return this.sortedProducts.filter((product) =>
        product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  mounted(){
    if(this.$store.state.userRole === null || this.$store.state.userRole === '' || this.$store.state.userRole === undefined){
      this.$router.push('/login')
    } 
  },

  components: { ProductCardComp, Loader },
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

option:hover {
  opacity: 70%;
  background: #000;
  color: yellow;
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

  h1{
    font-size: 30px;
  }
.sorts{
  flex-direction: column;
  gap: 4px;
  font-size: 10px ;
  width: fit-content;
}  
.products{
  display: flex !important; 
  flex-direction: column;
}

.sort-select{
  width: fit-content;
}
input{
  width: fit-content !important;
} 
.buttons{
  display: flex;
  flex-wrap: wrap;
}
}
</style>
