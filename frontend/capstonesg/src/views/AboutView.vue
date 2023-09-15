<template>
  <main>
    <h1 class="text-secondary text-[60px] text-center m-6">About Us</h1>
    <div class="flex gap-40 justify-center p-10" id="mainText">
      <div
        class="w-1/2 p-10 rounded-[30px] border-[2px] border-main bg-contrast" id="mission"
      >
        <h1 class="text-center text-detail text-[40px]">Vision</h1>
        <p class="text-secondary text-center">
          At SG NFT Store, our vision is to revolutionize the way people collect
          and appreciate digital art and collectibles. We aspire to be the
          leading destination for NFT enthusiasts, offering a curated selection
          of rare and innovative creations. Our commitment to fostering a
          vibrant community, providing access to exclusive content, and pushing
          the boundaries of what's possible in the NFT space drives us to
          continually innovate and empower digital collectors worldwide.
        </p>
      </div>
      <div
        class="w-1/2 p-10 rounded-[30px] border-[2px] border-main bg-contrast"
        id="vission"
      >
        <h1 class="text-center text-detail text-[40px]">Mission</h1>
        <p class="text-secondary text-center">
          Our mission at SG NFT Store is to empower digital collectors by
          providing a secure, user-friendly platform that offers access to
          unique NFTs. We strive to curate a diverse range of digital art and
          collectibles, foster a thriving community of creators and enthusiasts,
          and continuously push the boundaries of NFT technology to create a
          seamless and exciting experience for our users
        </p>
      </div>
    </div>

    <div class="flex flex-row gap-10 mx-auto pb-10 justify-center items-center" id="founder">
      <div class="w-1/2 flex flex-col gap-5" id="founderText">
        <h1 class="text-detail text-[60px]">Meet The Founder</h1>
        <h3 class="text-secondary text-[30px]">Ethan Lesar</h3>
        <p class="text-secondary text-[20px]">
          Driven by this vision, Ethan tirelessly worked to create a platform
          that reflects his commitment to curating exceptional NFTs and
          fostering a vibrant community of creators and collectors. His
          innovative spirit and dedication to quality have established SG NFT
          Store as a trusted destination for digital art and collectibles
          enthusiasts worldwide.
        </p>
      </div>
      <div>
        <img src="https://i.postimg.cc/ZRvKnGxp/Group-69.png" alt="founder" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    if (
      this.$store.state.userRole === null ||
      this.$store.state.userRole === "" ||
      this.$store.state.userRole === undefined
    ) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
main {
  background: conic-gradient(
    from 174deg at 60.1% 50%,
    #000 9.815694093704224deg,
    rgba(32, 32, 32, 0.8) 64.75907742977142deg,
    #202020 109.22781229019165deg
  );
}
@media screen and (max-width:800px) {
  #mainText{
    gap: 10px;
  } 

  h1{
    font-size: 40px;
  }
  p{
    font-size: 12px;
  }
  #mission, #vission{
    width: 100%;
  }
  #founderText{
    margin-left: 35px !important;
  }

}
@media screen and (max-width:400px) {
  h1{
    font-size: 30px;
  }
  p{
    font-size: 10px;
  }

  #mainText{
    flex-direction: column;
    gap: 2px;
  }

  #mission, #vission{
    width: 100%;
  }
  #founder{
    flex-direction: column;
  }
}


</style>
