<template>
  <div class="h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTM2XzEuanBn.jpg');">
    <div class="flex flex-row-reverse shadow-2xl w-full md:w-2/4 px-5 py-5 rounded-xl bg-gray-100 bg-opacity-40" id="container">
      <div class="flex items-center justify-center w-3/3 md:w-1/3" id="logo-container">
        <img src="https://images.yourstory.com/cs/images/companies/FuelBuddy-1681817720761.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="Image" class="rounded-full h-70 w-70" />
      </div>
      <div class="w-full md:w-2/3 px-5 py-5">
        <h1 class="font-sans text-5xl font-bold text-gray-500 mb-5">
          SignUp
        </h1>
        <div v-show="error?.length !== 0" class="bg-red-600 px-2 py-1 rounded">
          <p class="text-white">{{ error }}</p>
        </div>
        <div class="flex flex-col mx-auto gap-y-5">
          <div class="relative mb-6">
            <input type="text" class="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-4/5 bg-transparent" placeholder="abc@example.com" name="email" v-model="email">  
          </div>
          <div class="relative mb-5">
            <input type="password" class="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-4/5 bg-transparent" placeholder="Password" name="password" v-model="password">
          </div>
        </div>
        <button class="shadow-xxl border border-red-600 px-7 py-2 rounded text-red-600 bg-transparent hover:bg-red-600 hover:text-white hover:border-red-600" @click="signup">SignUp</button>

        <p class="text-gray-800">
          Create an account,
          <strong class="cursor-pointer" @click="redirectToLogin">click here</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { linkTo } from "@storybook/addon-links";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

function redirectToLogin() {
  linkTo("Login", "Primary")();
  router.push("/");
}
async function signup() {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    redirectToLogin();
  } catch (err: any) {
    error.value = err.message;
  }
}
</script>

<style scoped>
@media (max-width: 1024px) {
  #logo-container {
    display: none;
  }
  .relative input {
    width: 100%;
  }
  #container{
    width: 80%;
    justify-content: center;
  }
}
</style>

