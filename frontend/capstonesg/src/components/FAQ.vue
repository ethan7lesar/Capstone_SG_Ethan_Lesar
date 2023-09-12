<template>
    <div class="flex flex-col gap-6 my-12">
        <h2 class="text-3xl relative w-fit text-detail">
            Frequently asked questions
        </h2>

        <div class="flex items-center gap-5 w-full border-detail border p-2 rounded-[20px] bg-main">
            <span class="text-5xl text-secondary">Q</span>
            <select name="faq" id="faq" class="text-xl flex-1 text-center bg-black text-detail rounded-[20px]" v-model="selected">
                <option value="Ordering with Another Time is easy. Simply browse our collection, select the watch you desire, and click 'Add to Cart.'' Proceed to the checkout, where you can enter your shipping and payment details. Once your order is confirmed, you'll receive an email notification, and we'll take care of the rest.">How do I place an order with Another Time?</option>
                <option value="We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Rest assured that our payment process is secure to protect your sensitive information.">What payment methods do you accept?</option>
                <option value="Absolutely! Once your order is shipped, you will receive a tracking number via email. You can use this number to monitor the progress of your package and estimate its delivery date.">Can I track my order?</option>
                <option value="We want you to be completely satisfied with your purchase. If, for any reason, you're not happy with your order, you can return it within 30 days of receiving it for a full refund or exchange. Please refer to our Return Policy for detailed instructions and eligibility criteria.">What is your return policy?</option>
                <option value="Yes, we offer a warranty on all our timepieces. The duration of the warranty may vary by product, but it typically covers manufacturing defects and issues that may arise under normal use. Please review the product's warranty information provided with your purchase for specific details or contact our customer support for assistance.">Are your watches covered by a warranty?</option>
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

</style>