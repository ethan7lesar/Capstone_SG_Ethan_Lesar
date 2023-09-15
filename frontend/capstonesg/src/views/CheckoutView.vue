<template>
  <div class="flex mb-10" id="main">
    <div class="w-1/2 flex flex-col gap-4 items-center justify-center"
    id="pay"
  >
      <h1 class="text-secondary mx-auto text-[30px]">CONFIRM YOUR PAYMENT</h1>
      <div class="flex justify-around w-2/3" id="payment">
        <label for="name">Card Holder Name:</label>
        <input class="ms-auto" required ref="ownerInput" />
      </div>
      <div class="card-number flex justify-around w-2/3" id="payment">
        <label>Card Number:</label>
        <input type="number" required ref="cardNumberInput" class="ms-auto" />
      </div>
      <div class="cvv flex justify-around w-2/3" id="payment">
        <label id="labelCVV" class="me-auto">CVV:</label>
        <input class="w-[80px]" type="password" required ref="cvvInput"  id="cvv"/>
      </div>

      <div class="last">
        <div class="selection flex flex-col justify-center items-center">
          <h3 class="text-detail text-[20px]">Expiry Date:</h3>
          <div class="date">
            <select
              name="months"
              id="months"
              class="bg-detail rounded-[20px] p-1"
            >
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select
              name="years"
              id="years"
              class="bg-detail rounded-[20px] p-1"
            >
              <option value="2020">2029</option>
              <option value="2019">2028</option>
              <option value="2018">2027</option>
              <option value="2017">2026</option>
              <option value="2016">2025</option>
              <option value="2015">2024</option>
            </select>
          </div>
          <div class="flex gap-1 items-center justify-center mt-4">
            <img
              class="w-1/6 h-fit"
              src="https://i.postimg.cc/VLG4z5TN/pngwing-com-1.png"
              alt=""
            />
            <img
              class="w-1/6 h-fit"
              src="https://i.postimg.cc/yxFdvJZy/pngwing-com-2.png"
              alt=""
            />
            <img
              class="w-1/6 h-fit"
              src="https://i.postimg.cc/3rX7dQCp/pngwing-com-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <button
        @click="checkout"
        class="mb-3 border-[2px] border-main bg-detail rounded-[30px] p-2 text-[20px]"
        type="submit"
      >
        Pay Now
      </button>
    </div>
    <div
      class="flex flex-col w-1/3 border-main rounded-[30px] border-[5px] p-10 mx-auto my-10 bg-detail mb-40"
      id="cart"
    >
      <h1 class="text-main mx-auto text-[20px]">Items:</h1>
      <table class="flex flex-col gap-10 w-fit">
        <thead class="mx-auto">
          <tr class="flex gap-14">
            <th class=" ">Image</th>
            <th>Products</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="product in cart" :key="product.id" class="flex gap-3">
          <tr class="flex gap-10 justify-center">
            <td class="w-4/12">
              <img
                :src="product.prodUrl"
                :alt="product.prodName"
                class="h-fit rounded-[20px] border-[1px] border-black"
              />
            </td>
            <td class="ps-2">
              {{ product.prodName }}
            </td>
            <td class="me-4">
              {{ product.price }}
            </td>
            <td>
              <button
                class="border-[2px] border-main w-fit p-1 mx-auto rounded-[30px]"
                @click="removeFromCart(product.cartID)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
        <h1 class="mx-auto">Total Price: R{{ cartTotalPrice }}</h1>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  Name: "setCart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },

  mounted() {
    this.$store.dispatch("getCart", this.user.userID);
  },
  methods: {
    async paycash() {
      const userID = this.user.userID;

      try {
        await this.$store.dispatch("clearCart", { userID });

        // Show a SweetAlert for a successful purchase
        Swal.fire({
          title: "Thank you for your purchase!",
          background: "#000000",
          color: "#F6EA00",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Redirect to the login page after clicking OK
          this.$router.push("/");
        });
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },
    async checkout() {
      const ownerInput = this.$refs.ownerInput.value;
      const cvvInput = this.$refs.cvvInput.value;
      const cardNumberInput = this.$refs.cardNumberInput.value;

      // Perform custom validation
      if (!ownerInput || !cvvInput || !cardNumberInput) {
        // Display a SweetAlert error message
        Swal.fire({
          background: "#000000",
          color: "#F6EA00",
          icon: "error",
          title: "Error",
          text: "Please fill in all required fields before proceeding.",
        });
        return; // Prevent form submission
      }

      const userID = this.user.userID;

      try {
        await this.$store.dispatch("clearCart", { userID });

        // Show a SweetAlert for a successful purchase
        Swal.fire({
          title: "Thank you for your purchase!",
          background: "#000000",
          color: "#F6EA00",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Redirect to the login page after clicking OK
          this.$router.push("/cart");
        });
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },
    removeFromCart(cartID) {
      const userID = this.user.userID;

      this.$store
        .dispatch("removeFromCart", { userID, cartID })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 20px;
  border: 1px solid rgba(246, 234, 0, 0.83);
  background: linear-gradient(0deg, #000 0%, #000 100%), rgba(246, 234, 0, 0);
  margin-block-end: auto;
  height: 35px;
  flex-shrink: 0;
  color: white;
  font-family: "Archivo Black", sans-serif;
  padding-left: 18px;
}

label {
  color: #f6ea00;
}

option:hover {
  opacity: 70%;
  background: #000;
  color: yellow;
}

button:hover {
  color: black;
  background: #f6ea00;
  box-shadow: 0 0 30px 5px #f6ea00;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
@media screen  and (max-width:800px){
  #main{
    flex-direction: column;
  }

  #cart{
    width: 80%;
    margin: auto;
    margin-bottom: 200px;
  }
  #Image{
    width: 20% !important;
  }

  input{
    width: fit-content;
    height: fit-content;
    padding-left: 10px !important;
    font-size: 20px
  }
  
  h1{
    font-size: 30px;
  }

  #pay{
    width: 100%;
  }
  #cvv{
    width: 100px;
    margin-right: auto !important;
  }
  #labelCVV{
    margin-right: 120px;
  }
  
}
@media screen and (max-width:400px) {

  input{
    width: 150px;
    height: fit-content;
    padding-left: 0px !important;
    font-size: 12px
  }

  #main{
    flex-direction: column;
  }

  h1{
    font-size: 10px;
  }
  #cart{
    width: fit-content;
  padding: 0px;
  }

  table{
    font-size: 10px;
    gap: 0;
    padding: 10px;
  }
  tbody{
    gap: 1;
  }
  a{
    font-size: 12px;
    padding: 2px;
    margin-bottom: 10px;
  }

  tr{
    flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1px !important;
  }
  td{
    padding: 0px;
    margin: 0px;
  }
  thead{
    display: none;
  }

  #payment{
    gap: 3px;
    justify-content: start !important;
  }
  
  label{
    font-size: 10px !important;
  }

  .last{
    font-size: 15px;
    justify-content: center;
    align-items: center;
  }

  button{
    font-size: 12px;
    padding: 2px;
  }
  h3{
    font-size: 14px;
  }
  
}


</style>
