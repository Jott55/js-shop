<script setup lang="ts">
import LoginField from "@/components/Login/LoginField.vue";
import { createAuthCookie } from "@/datastore";
import { postLoginUser } from "@/fetchdata";
import { type ILoginUser } from "@/template";

const sendUser = async (user: ILoginUser) => {
  let token = await postLoginUser(user);
  if (token) {
    createAuthCookie(token);
  }
};
</script>

<template>
  <LoginField :callback="sendUser" button="Log" />
</template>

<style scoped></style>
