<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import shopIcon from "./assets/bitmap.svg";
import { RouterView } from "vue-router";

const navlinks = [
  { name: "Home", link: "/" },
  { name: "Cart", link: "/cart" },
  { name: "Admin", link: "/admin" },
  { name: "Profile", link: "/profile" },
];
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
  max-width: 1280px;
  margin: 0 auto;
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
}

a:visited {
  color: inherit;
}

* {
  box-sizing: border-box;
}
</style>
