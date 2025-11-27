<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import shopIcon from "./assets/bitmap.svg";
import { RouterView, useRoute } from "vue-router";
import { watch } from "vue";
import { checkAuthToken } from "./fetchdata";

const navlinks = [
  { name: "Home", link: "/" },
  { name: "Cart", link: "/cart" },
  { name: "Login", link: "/login" },
  { name: "Register", link: "/register" },
];

const route = useRoute();

const removeLink = () => {
  navlinks.splice(
    navlinks.findIndex((value) => value.name === "Login"),
    1,
  );
  navlinks.splice(
    navlinks.findIndex((value) => value.name === "Register"),
    1,
  );
};
const addLink = () => {
  navlinks.push({ name: "Admin", link: "/admin" });
  navlinks.push({ name: "Profile", link: "/profile" });
};

watch(
  () => route.params.id,
  () => {
    if (checkAuthToken()) {
      removeLink();
      addLink();
    }
  },
  { immediate: true },
);
</script>

<template>
  <TheNavbar
    title="Js Shop"
    :icon="shopIcon"
    class="the-navbar"
    :links="navlinks"
  />

  <main id="app">
    <RouterView />
  </main>
</template>

<style scoped>
#app {
  overflow: auto;
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  padding: 2rem;
}
</style>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

a:active {
  color: hsl(159, 12%, 56%);
}

a:visited {
  color: inherit;
}

* {
  box-sizing: border-box;
}
</style>
