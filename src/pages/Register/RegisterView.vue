<script setup lang="ts">
import RegisterField from "@/components/Register/RegisterField.vue";
import { insertUser, registerUser } from "@/fetchdata";
import { type IUser, User } from "@/template";
import { ref } from "vue";

const us = ref<IUser>(new User());

const saveUser = async () => {
  let access_token = await registerUser(us.value);

  document.cookie = `access_token=${access_token}`;
};
</script>

<template>
  <RegisterField :user="us" button="Register" :callback="saveUser" />
</template>

<style scoped></style>
