<template>
    <div>
        <main class="flex flex-col w-fit mx-auto">
            
            <label for="name">Name</label>
            <input type="text" maxlength="255" autocomplete="off" required v-model="prodName" id="name" />
            <label for="model">Description</label>
            <input type="text" id="model" maxlength="255" autocomplete="off" required v-model="prodDesc"/>
            <div class="grid adminGrid">
              <div class="flex flex-col">
                <label for="price">price</label>
                <input type="text" autocomplete="off" required v-model="price"/>
              </div>

              <div class="flex flex-col">
                <label for="Year">Production Year</label>
                <input type="number" autocomplete="off" required v-model="prodYear">
              </div>
              <div class="flex flex-col">
                <label for="price">Creator</label>
                <input type="url" autocomplete="off" required v-model="creator"/>
             </div>
              <div class="flex flex-col">
                <label for="price">URL</label>
                <input type="url" autocomplete="off" required v-model="prodUrl"/>
             </div>
            </div>
        
            <div class=" flex justify-between items-center">
              <div
                id="success"
                class="success bg-green-200 p-3 text-xl h-fit w-fit rounded-md"
              
              >
                Product Successfully Added ✅
              </div>
              <button class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5" @click="addProduct">
                submit
              </button>
            </div>
          </main>
    </div>
</template>

<script>
  

    
export default {
    data() {
        return {
                prodName: '',
                prodDesc: '',
                price: '',
                prodYear: '',
                creator: '',
                prodUrl: '',
        }
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

  const success = await this.$store.dispatch('addProduct', productData);

if (success) {
  const successPop = document.getElementById("success");
        successPop.classList.toggle("show");
        await new Promise((resolve) => {
          setTimeout(() => {
            this.$router.push("/admin");
            resolve();
          }, 2000);
        }); 
// alert('Product added successfully!');
this.prodName = '';
this.prodDesc = '';
this.price = '';
this.prodYear ='';
this.creator = '';  
this.prodUrl = '';
this.$router.push('/admin');
} else {
alert('Failed to add product. Please try again.');
}
},
},
};


</script>

<style scoped>


</style>