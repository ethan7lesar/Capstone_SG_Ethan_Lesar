<template>
  <main>
    <HeroComp />
    <EmailComp />
  </main>
</template>

<script>
// @ is an alias to /src
import HeroComp from "@/components/HeroComp.vue";
import EmailComp from "@/components/EmailComp.vue";

export default {
  components: {
    HeroComp,
    EmailComp,
  },
  mounted(){
    if(this.$store.state.userRole === null || this.$store.state.userRole === '' || this.$store.state.userRole === undefined){
      this.$router.push('/login')
    } 
  }
};
</script>

<style></style>
