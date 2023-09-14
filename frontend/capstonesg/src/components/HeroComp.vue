<template>
  <header class="flex mt-20">
    <div class="flex-1 ms-24 hero">
      <h1 class=" text-secondary text-[78px] heroText">Discover The World of digital art.</h1>
      <div class="buttons flex gap-20 mt-10">
        <router-link class=" border-[1px] border-main p-5 rounded-[15px] bg-detail text-contrast " to="/products">Discover Art</router-link>
        <router-link to="/about" class="border-[1px] border-detail p-5 rounded-[15px] text-detail">How we work</router-link>
      </div>
    </div>
    <div class="ms-auto flex-1">
        <img src="https://i.postimg.cc/ZqZFR9hc/Group-1-new.png" alt="" class="w-[95%] h-[95%]">
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: conic-gradient(
    from 195deg at 60.1% 50%,
    #000 9.815694093704224deg,
    rgba(32, 32, 32, 0.8) 64.75907742977142deg,
    #202020 109.22781229019165deg
  );
}

a:hover,button:hover {
  color: black;
  background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

@media screen and (max-width: 400px) {
.heroText{

  font-size: 30px;
}

a{
padding: 4px;
font-size: 10px;
margin-bottom: 2px;
font-size: 10px;
}
header{
flex-direction: column;
  margin-top: 10px;
}
.hero{
  margin: 0px;
  margin-left: 10px !important;
}

.buttons{
  margin-top: 10px;
}
img{
  margin-top: 10px;
}
}
</style>
