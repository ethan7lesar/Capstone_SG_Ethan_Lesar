<template>
<NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
components: {NavBarComp, FooterComp}

}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

#app{
  font-family: 'Archivo Black', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #202020;
}


</style>
