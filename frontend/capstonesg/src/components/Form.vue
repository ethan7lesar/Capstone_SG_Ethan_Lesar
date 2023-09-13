<template>
  <form
    action="https://formspree.io/f/mbjvkjrl"
    method="POST"
    class="flex flex-col"
  >
    <div class="flex gap-5 my-5">
      <h1 class="text-3xl formHeading text-detail">Contact Us</h1>
      <div class="flex justify-between items-center gap-3 flex-1 border1">
        <div class="flex-1 h-[5px] bg-detail/75 rounded-full"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.1015 40.3232C31.1473 40.3232 40.1015 31.3689 40.1015 20.3232C40.1015 9.27754 31.1473 0.323242 20.1015 0.323242C9.05585 0.323242 0.101562 9.27754 0.101562 20.3232C0.101562 31.3689 9.05585 40.3232 20.1015 40.3232ZM23.1885 15.7758C24.8933 14.0709 24.8933 11.3068 23.1885 9.6019C21.4836 7.89702 18.7195 7.89702 17.0146 9.6019C15.3098 11.3068 15.3098 14.0709 17.0146 15.7758L20.1015 18.8627L23.1885 15.7758ZM24.649 23.4102C26.3539 25.1151 29.118 25.1151 30.8229 23.4102C32.5277 21.7053 32.5277 18.9412 30.8229 17.2363C29.118 15.5315 26.3539 15.5315 24.649 17.2363L21.5621 20.3233L24.649 23.4102ZM23.1885 31.0446C24.8933 29.3397 24.8933 26.5756 23.1885 24.8707L20.1015 21.7838L17.0146 24.8707C15.3098 26.5756 15.3098 29.3397 17.0146 31.0446C18.7195 32.7495 21.4836 32.7495 23.1885 31.0446ZM9.38019 23.4102C7.67535 21.7053 7.67535 18.9412 9.38019 17.2363C11.0851 15.5315 13.8492 15.5315 15.5541 17.2363L18.641 20.3233L15.5541 23.4102C13.8492 25.1151 11.0851 25.1151 9.38019 23.4102Z"
            fill="#F6EA00"
          />
        </svg>
        <div class="flex-1 h-[5px] bg-detail/75 rounded-full"></div>
      </div>
    </div>
    <div class="input1">
      <input
        type="text"
        class="w-full rounded-sm p-2 text-secondary"
        name="name"
        id="name"
        placeholder=" "
        required
        oninvalid="this.setCustomValidity('Please insert your Full Name')"
        oninput="this.setCustomValidity('')"
      />
      <div class="label">Full Name</div>
    </div>
    <div class="input2">
      <input
        type="text"
        name="email"
        class="w-full rounded-sm p-2 text-secondary"
        id="email"
        placeholder=" "
        required
        oninvalid="this.setCustomValidity('Please Enter a valid email address')"
        oninput="this.setCustomValidity('')"
      />
      <div class="label">Email</div>
    </div>
    <textarea
      placeholder="Leave a message"
      class="w-full p-2 relative text-secondary"
      name="message"
      id="message"
      cols="30"
      rows="10"
      required
      oninvalid="this.setCustomValidity('Leave a message too!')"
      oninput="this.setCustomValidity('')"
    ></textarea>

    <div class="flex gap-5">
      <div class="flex justify-between items-center gap-3 flex-1 border2">
        <div class="flex-1 h-[5px] bg-detail/75 rounded-full"></div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.1015 40.3232C31.1473 40.3232 40.1015 31.3689 40.1015 20.3232C40.1015 9.27754 31.1473 0.323242 20.1015 0.323242C9.05585 0.323242 0.101562 9.27754 0.101562 20.3232C0.101562 31.3689 9.05585 40.3232 20.1015 40.3232ZM23.1885 15.7758C24.8933 14.0709 24.8933 11.3068 23.1885 9.6019C21.4836 7.89702 18.7195 7.89702 17.0146 9.6019C15.3098 11.3068 15.3098 14.0709 17.0146 15.7758L20.1015 18.8627L23.1885 15.7758ZM24.649 23.4102C26.3539 25.1151 29.118 25.1151 30.8229 23.4102C32.5277 21.7053 32.5277 18.9412 30.8229 17.2363C29.118 15.5315 26.3539 15.5315 24.649 17.2363L21.5621 20.3233L24.649 23.4102ZM23.1885 31.0446C24.8933 29.3397 24.8933 26.5756 23.1885 24.8707L20.1015 21.7838L17.0146 24.8707C15.3098 26.5756 15.3098 29.3397 17.0146 31.0446C18.7195 32.7495 21.4836 32.7495 23.1885 31.0446ZM9.38019 23.4102C7.67535 21.7053 7.67535 18.9412 9.38019 17.2363C11.0851 15.5315 13.8492 15.5315 15.5541 17.2363L18.641 20.3233L15.5541 23.4102C13.8492 25.1151 11.0851 25.1151 9.38019 23.4102Z"
          fill="#F6EA00"
        />
      </svg>
        <div class="flex-1 h-[5px] bg-detail/50 rounded-full"></div>
      </div>
      <button
        type="submit"
        class="border-[1px] border-detail  text-detail rounded-[20px] my-6 w-fit px-5 py-1 bg-main text-lg self-end submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
 
  border-radius: 20px;
  border: 1px solid rgba(246, 234, 0, 0.83);
  background: linear-gradient(0deg, #000 0%, #000 100%), rgba(246, 234, 0, 0);
}

.label {
  transform: translate(0.5rem, -2rem);
  width: fit-content;
  transition: all 0.2s ease-out;
  background-color: transparent;
  color: white;
}

input:focus + .label,
input:not(:placeholder-shown) + .label {
  transform: translate(-0.05rem, -3.5rem);
  color: #F6EA00 ;
font-family: Archivo Black;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

::placeholder {
  color: white;

}


button:hover {
  color: black;
  background: #f6ea00;
box-shadow: 0 0 30px 5px #f6ea00;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

@media screen and (min-width: 1024px) {
  .label {
    font-size: 1rem;
  }
}
</style>
