<template>
  <div v-if="user">
    <main
      class="items-center justify-center text-center w-fit rounded-[30px] border-main border-[2px] p-10 bg-contrast my-6 mx-auto flex flex-col gap-5 mb-10"
    >
      <div class="heading mx-auto">
       <h1 class=" text-secondary text-4xl">User Info:</h1>
      </div>
      <div class="imputs flex flex-col gap-7">
        <div class="flex justify-between gap-5 text-center">
          <label for="" class="my-auto">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="user.firstName"
          />
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label for="" class="my-auto">Last Name:</label>
          <input type="text" name="lastName" id="lastName" v-model="user.lastName" />
          
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label for="" class="my-auto">Email:</label>
          <input
            type="email"
            name="emailAdd"
            id="emailAdd"
            v-model="user.emailAdd"
          />
        </div>
        <div class="flex justify-between gap-5 text-center">
          <label class="my-auto">Password:</label>
          <input 
             class=" text-[12px]"
            type="password"
            name="userPass"
            id="userPass"
            v-model="user.userPass"
            placeholder="Please Enter a New Pass"
          />
        </div>
      </div>
      <div class="btnandlink flex flex-col gap-1 mt-1">
        <button 
          type="submit"
          class="border-[2px] border-main bg-detail rounded-[30px] p-2 text-[20px]"
          @click = "updateUser" 
        >
          Save Changes
        </button>
      </div>
    </main>
  </div>
  <div v-else> 
    <Loader/>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Swal from "sweetalert2";
export default {
    components:{Loader},
  computed: {
    user() {
      return this.$store.state.userData;
    },
  },
  data() {
    return {
      data: {
        firstName: "",
        lastName: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
    };
  },
  methods: {
    updateUser() {
      const data = {
        id: this.user.userID,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userRole: this.user.userRole,
        emailAdd: this.user.emailAdd,
        userPass: this.user.userPass,
        userProfile: this.user.userProfile,
      };

      // Dispatch the action to update the product
      this.$store
        .dispatch("updateUser", data)
        .then((success) => {
          console.log("updatedUser", data);
          if (success) {
            this.$router.push("/");
            // success message
            Swal.fire({
              title: "Changes Saved Successfully",
              background: "#000000",
              color: "#F6EA00",
            });
          } else {
            // failed message
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  props: ["id"],

  mounted() {
    this.$store.dispatch("getUser", this.id),
      this.$store.dispatch("getUser");
  },
};
</script>

<style scoped>
input {
  border-radius: 20px;
  border: 1px solid rgba(246, 234, 0, 0.83);
  background: linear-gradient(0deg, #000 0%, #000 100%), rgba(246, 234, 0, 0);
  width: 250px;
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

main:hover {
  box-shadow: 0px 10px 4px 0px #f6ea00;
}
main {
  transition: 0.8s;
}
</style>
