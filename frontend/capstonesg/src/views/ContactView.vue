<template>
    <div>
Contact
    </div>
</template>

<script>
    export default {
        mounted(){
    if(this.$store.state.userRole === null || this.$store.state.userRole === '' || this.$store.state.userRole === undefined){
      this.$router.push('/login')
    } 
  }
    }
</script>

<style scoped>

</style>