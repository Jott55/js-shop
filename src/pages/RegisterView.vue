<script setup lang="ts">
import RegisterField from "@/components/Register/RegisterField.vue";
import { createAuthCookie } from "@/datastore";
import { insertUser, registerUser } from "@/fetchdata";
import { type IUser, User } from "@/template";
import { ref } from "vue";

const us = ref<IUser>(new User());

const saveUser = async () => {
  try {
    let access_token = await registerUser(us.value);
    if (access_token) {
      createAuthCookie(access_token);
    }
  } catch (e) {
    console.error(e);
  }
};
</script>

<template>
  <RegisterField :user="us" button="Register" :callback="saveUser" />
</template>

<style scoped></style>
