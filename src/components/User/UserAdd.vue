<script lang="ts" setup>
import { ref } from "vue";
import { User, UserDefault } from "@/template";
import UserCard from "./UserCard.vue";
import { insertUser } from "@/fetchdata";

const user = ref<User>(new UserDefault());

const insert = async () => { 
    insertUser(user.value)
}

</script>

<template>
  <h1>Add a User</h1>
  <div class="card">
    <div class="board">
      <div class="box">
        <label for="user-id">Id</label>
        <input type="number" v-model="user.Id" name="" id="user-id" />
      </div>
      <div class="box">
        <label for="user-name">Name</label>
        <input type="text" v-model="user.Name" id="user-name" />
      </div>
      <div class="box">
        <label for="user-email">email</label>
        <input type="text" v-model="user.Email" name="" id="user-email" />
      </div>
      <div class="box">
        <label for="user-photo">Photo</label>
        <input type="text" v-model="user.Photo_url" name="" id="user-photo" />
      </div>
      <div class="box">
        <label for="user-password">password</label>
        <input type="text" name="" v-model="user.Password_hash" id="user-password" />
      </div>
      <div class="box">
        <button type="button" @click="insert">Add user</button>
      </div>
    </div>
    <div class="board">
        <div class="box">
            <UserCard :user="user" />
        </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.board {
    border: 1rem double black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    align-items: start;
    row-gap: 0.5rem;
}

.box {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.box > button {
  margin: 2rem 0;
  padding: 1rem;
}
.box > input {
    font-size: 1.4em;
}
</style>
