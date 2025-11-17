<script lang="ts" setup>
import { ref, watch } from "vue";
import UserCard from "../../components/User/UserCard.vue";
import { User, UserDefault } from "@/template";
import { getUser } from "@/fetchdata";
import { useRoute } from "vue-router";

const userRef = ref<User>();

const route = useRoute();

const fetchData = async () => {
  let res = await getUser(2);
  if (res != null) {
    userRef.value = res;
  } else {
    userRef.value = new UserDefault();
  }
};

watch(
  () => route.params.id,
  () => {
    fetchData();
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="userRef">
    <UserCard :user="userRef" />
  </div>
</template>

<style scoped></style>
