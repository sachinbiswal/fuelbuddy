<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full md:w-2/5 flex flex-col items-center gap-y-2.5 bg-gray-100 bg-opacity-40 text-green-500 px-5 py-5 rounded-xl">
      <p class="text-green font-sans font-bold text-5xl md:text-3xl" id="emailHeader1">
        Welcome {{ userEmail.split('@')[0] }} 
      </p>
      <div class="shadow-2xl w-full md:w-4/5 py-5 px-10 bg-green-300 rounded-xl mt-20">
        <h4 class="text-green-600 font-sans font-bold text-2xl mb-10 md:text-lg">
          Profile Information
        </h4>
        <p class="text-white font-sans font-bold text-1xl md:text-xs">
          <b style="color: green;"> User Id:</b> {{ store.getUserCredential.userId }}
        </p>
        <p class="text-white font-sans font-bold text-1xl md:text-xs">
          <b style="color: green;">email: </b>{{ store.getUserCredential.email }}
        </p>
      </div>

      <button
        class="shadow-xxl border border-red-600 px-7 py-2 rounded text-red-600 bg-transparent hover:bg-red-600 hover:text-white hover:border-red-600 mt-5"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>



<script lang="ts">
import { onMounted, ref } from "vue";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebaseConfig";
import { useDataStore } from "../store/user_data";

export default {
  setup() {
    const store = useDataStore();
    const router = useRouter();
    const userEmail = ref("");

    function redirectToLogin() {
      router.push("/");
    }

    async function logout() {
      await signOut(auth);
      store.setUserCredential({
        email: "",
        userId: "",
        name: "",
      });
      redirectToLogin();
    }

    onMounted(() => {
      userEmail.value = store.getUserCredential.email;
    });

    // watch(userEmail, (newValue) => {
    //   const username = newValue.split("@")[0];
    //   document.getElementById("emailHeader1").textContent = "Welcome, " + username;
    // });

    return {
      store,
      logout,
      userEmail,
    };
  },
};
</script>

<style scoped>
</style>
