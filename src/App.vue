<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import shopIcon from "@/assets/bitmap.svg";
import { RouterView, useRoute } from "vue-router";
import { watch, ref } from "vue";
import { checkAuthToken } from "./fetchdata";

const shopIconString = shopIcon;

const siteThemes = { currentIndex: 0, themes: ["light", "dark"] };

const OP_LINKS = [
  { name: "Admin", link: "/admin" },
  { name: "Profile", link: "/profile" },
];

const STD_LINKS = [
  { name: "Home", link: "/" },
  { name: "Cart", link: "/cart" },
];

const ANON_LINKS = [
  { name: "Login", link: "/login" },
  { name: "Sign in", link: "/signin" },
];

const navlinks = ref(STD_LINKS);

const route = useRoute();

const updateNavItems = () => {
  if (checkAuthToken()) {
    navlinks.value = [...STD_LINKS, ...OP_LINKS];
  } else {
    navlinks.value = [...STD_LINKS, ...ANON_LINKS];
  }
};

const updateTheme = () => {
  document.documentElement.dataset["theme"] =
    siteThemes.themes[siteThemes.currentIndex];

  if (siteThemes.currentIndex < siteThemes.themes.length - 1) {
    siteThemes.currentIndex++;
    return;
  }
  siteThemes.currentIndex = 0;
};

updateTheme();

watch(
  () => route.params.id,
  () => {
    updateNavItems();
  },
  { immediate: true },
);
</script>

<template>
  <main id="app">
    <TheNavbar
      title="Js Shop"
      class="the-navbar"
      :icon="shopIconString"
      :links="navlinks"
      :change-theme="updateTheme"
    />
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  color: var(--on-primary);
  background-color: var(--primary);
}
.content {
  overflow: auto;
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  padding: 2rem;
}
</style>
