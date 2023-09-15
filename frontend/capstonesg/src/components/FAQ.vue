<template>
    <div class="flex flex-col gap-6 my-12">
        <h2 class="text-3xl relative w-fit text-detail">
            Frequently asked questions
        </h2>

        <div class="flex items-center gap-5 w-full border-detail border p-2 rounded-[20px] bg-main">
            <span class="text-5xl text-secondary">Q</span>
            <select name="faq" id="faq" class="text-xl flex-1 text-center bg-black text-detail rounded-[20px]" v-model="selected">
                <option value="NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of a specific item or piece of content, often in the form of digital art, collectibles, music, or virtual real estate.">What are NFTs, and how do they work?</option>
                <option value=" Purchasing NFTs from SG NFT Store is easy. First, you'll need a compatible cryptocurrency wallet that supports NFTs and a balance of the cryptocurrency used for the NFT purchase (usually Ethereum).">How can I purchase NFTs from SG NFT Store?</option>
                <option value="Be the first to know about upcoming NFT drops, ensuring you don't miss out on limited-edition releases.Enjoy special discounts and promotions available only to our mailing list subscribers">What benefits do I get from subscribing to SG NFT Store's mailing list?</option>
            </select>
        </div>

        <div class="w-full border border-detail flex p-2 items-center gap-5 rounded-[20px] bg-main">
            <span class="text-5xl text-secondary">
                A
            </span>
            <div class="text-lg text-secondary">
                {{ selected }}
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                selected: ''
            }
        } 
    }
</script>

<style scoped>

    h2::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #F6EA00;
    }

    @media screen and (max-width:800px) {
  option{
    width: 600px !important;
    font-size: 12px;

  }
  select{
    width: 500px !important;
  }
  
    }

</style>