<script setup lang="ts">
import { User, type IUser } from "@/template";

const { user = new User() } = defineProps<{
  user?: IUser;
}>();
</script>

<template>
  <div class="card">
    <img class="photo" :src="user.Photo_url" alt="photo" />
    <div class="board">
      <div class="box">
        <p class="label">Name</p>
        <p class="user">{{ user.Name }}</p>
      </div>
      <div class="box">
        <p class="label">Email</p>
        <p class="user">{{ user.Email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

.label {
  font-weight: 500;
  font-size: 2em;
}

.photo {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
.user {
  font-size: 1.4rem;
  font-weight: 400;
}

.box {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
</style>
