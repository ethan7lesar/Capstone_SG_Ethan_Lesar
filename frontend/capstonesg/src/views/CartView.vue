<template>
    <div>
        <table v-for="product in getCart" :key="product.id">
 <th>img</th> 
 <th>Products</th>
 <th>Description</th>
 <th>Price</th>
 <td> <img :src="product.prodURL" :alt="product.prodName"></td>
 <td>{{product.prodName}}</td>
 <td>{{product.prodDesc}}</td>
 <td>{{product.price}}</td>

        </table>

    </div>
</template>

<script>
   export default {
    Name: 'setCart',
    computed: {
      getCart() {
        console.log(this.$store.state.cart);
        return this.$store.state.cart
      },
      user(){
        return this.$store.state.userData
      }
    },
    mounted() {
      this.$store.dispatch('getCart', this.user.userID)
    }
}
</script>

<style scoped>

</style>