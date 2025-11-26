<script setup lang="ts">
import { User, type IUser } from "@/template";
import { ref } from "vue";

const {
  user = new User(),
  callback = () => alert("not implemented"),
  button = "Submit",
} = defineProps<{
  user?: IUser;
  callback?: (payload: PointerEvent) => void;
  button?: string;
}>();
</script>

<template>
  <div class="board">
    <div class="box">
      <label class="input-label" for="username">Name</label>
      <input class="input-el" type="text" id="username" v-model="user.Name" />
    </div>
    <div class="box">
      <label class="input-label" for="email">Email</label>
      <input class="input-el" type="text" id="email" v-model="user.Email" />
    </div>
    <div class="box">
      <label class="input-label" for="password">Password</label>
      <input
        class="input-el"
        type="password"
        id="password"
        v-model="user.Password"
      />
    </div>
    <div class="box">
      <label class="input-label" for="photo">Photo url</label>
      <input class="input-el" type="text" v-model="user.Photo_url" />
    </div>
    <div class="box">
      <button class="callback-button" @click="callback">{{ button }}</button>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.box {
  display: flex;
  flex-direction: column;
  width: 50vw;
  column-gap: 1rem;
  font-size: 1.4em;
}

.input-el {
  font-size: inherit;
}

.callback-button {
  max-width: 50vw;
  padding: 1rem;
}
</style>
