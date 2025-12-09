<script setup lang="ts">
import { checkAuthToken } from "@/fetchdata";
import { watch } from "vue";
import { useRoute } from "vue-router";
interface LinkItem {
  name: string;
  link: string;
}

const {
  title = "title",
  icon = " ",
  changeTheme = () => alert("not implemented"),
  links = [{ name: "Home Page", link: "/" }],
} = defineProps<{
  title?: string;
  icon?: string;
  changeTheme?: (payload: PointerEvent) => void;
  links?: Array<LinkItem>;
}>();
</script>

<template>
  <nav class="navbar-nav">
    <div class="navbar-content">
      <img :src="icon" alt="no icon available" class="navbar-img" />
      <h1 class="nav-title">{{ title }}</h1>
      <ul class="nav-list">
        <li v-for="(item, index) in links" :key="index">
          <RouterLink :to="item.link" class="nav-item">
            <h3>{{ item.name }}</h3>
          </RouterLink>
        </li>
        <button class="nav-item nav-button" @click="changeTheme">
          <span class="material-symbols-outlined">palette</span>
          <p>Change Theme</p>
        </button>
      </ul>
    </div>

    <li>
      <div id="hamburger-icon">
        <span class="hamburger-bar hamburger-bar-1"></span>
        <span class="hamburger-bar hamburger-bar-2"></span>
        <span class="hamburger-bar hamburger-bar-3"></span>
      </div>
    </li>
  </nav>
</template>

<style scoped>
/* .navbar-img {
  height: auto;
  width: 8rem;
  border-radius: 50%;
} */

.navbar-img {
  height: auto;
  width: 8rem;
  padding-left: 1rem;
}

.nav-title {
  width: 8rem;
  white-space: nowrap;
}

.navbar-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary);
  font-family: Arial, Helvetica, sans-serif;
  column-gap: 1rem;
  overflow: scroll;
}

.navbar-content {
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 1rem;
}

.nav-list {
  display: flex;
  column-gap: 1rem;
}

.nav-button {
  background-color: inherit;
  border: 0;
  color: inherit;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--terciary-border);
  padding: 0.3rem 1rem;
  /* line-height: 10%; */
  border-radius: 40px;
  min-width: 8rem;
  column-gap: 0.4rem;
  color: var(--on-terciary);
  background-color: var(--terciary);
}

#hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1px;
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
}

.hamburger-bar {
  background-color: hsla(207, 96%, 42%, 0.583);
  width: 100%;
  height: 0.3rem;
}
</style>
