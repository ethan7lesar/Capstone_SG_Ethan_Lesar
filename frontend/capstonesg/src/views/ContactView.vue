<template>
  <main class="my-auto flex flex-col lg:flex-row lg:gap-16 mx-12 ">
    <Form class="lg:flex-1" />
    <FAQ class="lg:flex-1 faq" />
  </main>
</template>

<script>
import Form from "../components/Form.vue";
import FAQ from "../components/FAQ.vue";
import { gsap } from "gsap";

export default {
  components: {
    Form,
    FAQ,
  },
  mounted() {
    let tl = gsap.timeline({ defaults: { duration: 0.625 } });

    tl.from(".formHeading", { opacity: 0, y: -70, ease: "elastic.out(1, 0.4)", duration: 0.8 })
      .from(".input1", { opacity: 0, x: -50 }, "-=0.4")
      .from(".input2", { opacity: 0, x: 100 }, "-=0.625")
      .from(".input3", { opacity: 0, y: 70, duration: 0.25 })
      .from(".border1", { opacity: 0, x: 100, duration: 0.25 })
      .from(".border2", { opacity: 0, x: -100, duration: 0.25 })
      .from(".faq", { opacity: 0, y: 70, duration: 0.25 })
      .from(".submit", { opacity: 0, y: 100, duration: 0.8, ease: "elastic.out(1, 0.4)", delay: 0.25 })
  },
};
</script>

<style scoped>




@media screen and (max-width:400px) {
  .faq{
    display: none;
  }
}



</style>