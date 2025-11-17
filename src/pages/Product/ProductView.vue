<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import ShopContainer from "../Shop/ShopContainer.vue";

import { getProduct } from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { ProductCart } from "@/template";

const route = useRoute();

const loading = ref(false);
const post = ref<ProductCart>();
const error = ref(null);

const getItem = async (id: string | string[] | undefined) => {
  loading.value = true;
  error.value = null;

  try {
    const res = await getProduct(Number(id));
    if (res != null) {
      post.value = res;
    }
    throw new Error("no response");
  } catch (err: any) {
    error.value = err;
  }
};

watch(
  () => route.params.id,
  () => getItem(route.params.id),
  { immediate: true },
);
</script>

<template>
  <div class="page" v-if="post">
    <ProductItem :product="post" />
    <ShopContainer></ShopContainer>
  </div>
</template>

<style scoped></style>
