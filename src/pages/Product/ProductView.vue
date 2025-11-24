<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import ShopContainer from "../Shop/ShopContainer.vue";

import { getProduct } from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { IProductDisplay, ProductDisplay } from "@/template";

const route = useRoute();

const post = ref<IProductDisplay | null>(null);

const getItem = async (id: string | string[] | undefined) => {

  if (typeof id === undefined) {
    return
  }

  const res = await getProduct(Number(id))

  if (res) {
    post.value = res
    return
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
