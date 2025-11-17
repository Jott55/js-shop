<script lang="ts" setup>
import { getData } from "@/fetchdata";
import ShopContainer from "./ShopContainer.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { type IProduct } from "@/template";

const route = useRoute();

const post = ref<IProduct[]>([]);
const error = ref(null);
const loading = ref(false);

watch(() => route.params.id, fetchData, { immediate: true });

async function fetchData() {
  try {
    let res = await getData();
    if (res != null) {
      post.value = res;
    } else {
      throw new Error("response was null");
    }
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>
<template>
  <div v-if="loading">Loading content: wait a moment</div>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post">
    <ShopContainer class="shop-container" :shop-items="post" />
    <ShopContainer class="shop-container" />
    <ShopContainer class="shop-container" />
  </div>
</template>

<style scoped>
.shop-container {
  margin-top: 1rem;
}
</style>
