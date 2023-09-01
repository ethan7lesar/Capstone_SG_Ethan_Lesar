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
};
</script>

<style></style>
