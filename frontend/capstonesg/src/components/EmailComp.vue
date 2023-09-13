<template>
  <div class="emailconnect py-24 px-10 flex">
    <div class="flex-1">
      <img
        class="w-5/6"
        src="https://i.postimg.cc/DZws7jZn/Group-main.png"
        alt="NFT"
      />
    </div>
    <div class="flex-1 flex-col my-auto">
      <h1 class="text-secondary text-[60px] w-full">
        Subscribe To Get The Latest Art
      </h1>
      <p class="text-secondary mb-7 w-8/12">
        Join the SG NFT Store mailing list today and embark on a digital art
        journey like never before! Subscribers get early access to the hottest
        NFT drops, exclusive discounts, and a front-row seat to the world of
        blockchain collectibles.
      </p>

      <form action="https://formspree.io/f/xleyleew" method="POST">
        <div class="flex">
          <input
            type="email"
            name="email"
            id="email"
            class="bg-black border-detail border-[1px] rounded-[20px] w-1/2 text-[20px] text-detail py-[2px] ps-4"
            placeholder="Enter Your Email"
            required
          /><button
            class="ms-4 border-[1px] p-2 border-main bg-detail rounded-[20px]"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.emailconnect {
  background: linear-gradient(
    140deg,
    #000 57.02%,
    rgba(50, 50, 50, 0.5) 78.02%
  );
}

button:hover {
  color: black;
  background: #f6ea00;
  box-shadow: 0 0 30px 5px #f6ea00;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
