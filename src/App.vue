<script setup lang="ts">
import { auth } from "./firebaseConfig";

import { onMounted } from "vue";
import { useDataStore } from "./store/user_data";

import { useRouter } from "vue-router";
import { linkTo } from "@storybook/addon-links";

const router = useRouter();

function redirectToDashboard() {
  linkTo("Dashboard", "Primary")();
  router.push("/dashboard");
}
function redirectToLogin() {
  linkTo("Login", "Primary")();
  router.push("/");
}
const store = useDataStore();
onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user === null) redirectToLogin();
    else {
      store.setUserCredential({
        email: user?.email!,
        userId: user?.uid,
        name: user?.displayName ?? "User",
      });
      redirectToDashboard();
    }
  });
});
</script>

<template>
  <div class="h-screen bg-cover bg-center " style="background-image: url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTM2XzEuanBn.jpg');">
    <router-view />
  </div>
</template>
