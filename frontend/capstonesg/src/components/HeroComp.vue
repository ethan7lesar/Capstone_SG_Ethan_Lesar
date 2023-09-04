<template>
  <header class="flex mt-20">
    <div class="flex-1 ms-24">
      <h1 class=" text-secondary text-[78px]">Discover The World of digital art.</h1>
      <div class="buttons flex gap-20 mt-10">
        <router-link class=" border-[1px] border-main p-5 rounded-[15px] bg-detail text-contrast " to="/">Discover Art</router-link>
        <router-link to="/about" class="border-[1px] border-detail p-5 rounded-[15px] text-detail">How we work</router-link>
      </div>
    </div>
    <div class="ms-auto flex-1">
        <img src="https://i.postimg.cc/CL9wffTh/Group-2.png" alt="" class="w-[95%] h-[95%]">
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
</style>
