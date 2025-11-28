<script lang="ts" setup>
import { ref, watch } from "vue";
import UserCard from "@/components/User/UserCard.vue";
import { User } from "@/template";
import { getUser } from "@/fetchdata";
import { useRoute } from "vue-router";

const userRef = ref<User>();

const route = useRoute();

const fetchData = async () => {
  try {
    let res = await getUser();
    if (res != null) {
      userRef.value = res;
    } else {
      userRef.value = new User();
    }
  } catch (e) {
    console.log(e);
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
