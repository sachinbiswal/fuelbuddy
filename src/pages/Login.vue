<template>
  <div class="h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTM2XzEuanBn.jpg');">
    <div class="flex flex-row-reverse shadow-2xl w-full md:w-2/4 px-5 py-5 rounded-xl bg-gray-100 bg-opacity-40" id="container">
      <div class="flex items-center justify-center w-3/3 md:w-1/3" id="logo-container">
        <img src="https://images.yourstory.com/cs/images/companies/FuelBuddy-1681817720761.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="Image" class="rounded-full h-70 w-70" />
      </div>
      <div class="w-full md:w-2/3 px-5 py-5">
        <h1 class="font-sans text-5xl font-bold text-gray-500 mb-5">
          Login
        </h1>
        <div v-if="error" class="bg-red-600 px-2 py-1 rounded">
          <p class="text-white">{{ error }}</p>
        </div>
        <div class="flex flex-col mx-auto gap-y-5">
          <div class="relative mb-6">
            <input type="text" class="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-4/5 bg-transparent" placeholder="abc@example.com" v-model="email">  
          </div>
          <div class="relative mb-5">
            <input type="password" class="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-4/5 bg-transparent" placeholder="Password" v-model="pwd">
          </div>
        </div>
        <button class="shadow-xxl border border-blue-600 px-7 py-2 rounded text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:border-blue-600" @click="login">Login</button>

        <p class="text-gray-800">
          Create an account,
          <strong class="cursor-pointer" @click="redirectToSignUp">click here</strong>
        </p>
        <button class="flex items-center justify-center border border-blue-600 px-7 py-2 rounded text-white bg-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-600 outline-none" @click="handleClick">
          <div class="flex items-start">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" class="w-8 h-auto" style="border-radius: 5px 0 0 5px;">
          </div>
          <span class="flex justify-center items-center text-base w-48 h-full pl-3">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebaseConfig";
import { signInWithPopup } from 'firebase/auth';
import { useDataStore } from "../store/user_data";
import { useRouter } from "vue-router";
import { linkTo } from "@storybook/addon-links";

const store = useDataStore();

const email = ref("");
const pwd = ref("");
const error = ref("");

const router = useRouter();

const provider = new GoogleAuthProvider();

function redirectToSignUp() {
  linkTo("SignUp", "Primary")();
  router.push("/sign-up");
}

function redirectToDashboard() {
  linkTo("Dashboard", "Primary")();
  router.push("/dashboard");
}

async function login() {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      pwd.value
    );
    store.setUserCredential({
      email: response.user.email ?? "",
      name: response.user.displayName ?? "",
      userId: response.user.uid,
    });
    redirectToDashboard();
  } catch (err: any) {
    error.value = err.message;
  }
}

const handleClick = () => {
  signInWithPopup(auth, provider).then((data) => {
    store.setUserCredential({
      email: data.user.email ?? "",
      name: data.user.displayName ?? "",
      userId: data.user.uid,
    });
    redirectToDashboard();
  }).catch((error) => {
    error.value = error.message;
  });
};
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
