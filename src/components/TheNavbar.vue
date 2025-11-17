<script setup lang="ts">
interface LinkItem {
  name: string;
  link: string;
}

const {
  title = "title",
  icon = "",
  links = [{ name: "Home Page", link: "/" }],
} = defineProps({
  title: String,
  icon: String,
  links: Array<LinkItem>,
});
</script>

<template>
  <nav class="navbar-nav">
    <div class="navbar-content">
      <img :src="icon" alt="no icon available" class="navbar-img" />
      <h1>{{ title }}</h1>
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in links" :key="index">
          <RouterLink :to="item.link">
            <h3>{{ item.name }}</h3>
          </RouterLink>
        </li>
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

.navbar-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 3%;
  column-gap: 1rem;
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

.nav-item {
  border-left: 0.3rem solid hsl(204, 20%, 61%);
  padding-left: 1rem;
  line-height: 10%;
  border-radius: 4%;
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
