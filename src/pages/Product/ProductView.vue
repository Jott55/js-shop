<script setup lang="ts">
import ProductItem from "../../components/Products/ProductItem.vue";
import ShopContainer from "@/components/Shop/ShopContainer.vue";

import { addItem, getProduct } from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { IProductDisplay, ProductDisplay } from "@/template";

const route = useRoute();

const post = ref<IProductDisplay | null>(null);

const getItem = async (id: string | string[] | undefined) => {
  if (typeof id === undefined) {
    return;
  }

  const res = await getProduct(Number(id));

  if (res) {
    post.value = res;
    return;
  }
};

watch(
  () => route.params.id,
  () => getItem(route.params.id),
  { immediate: true },
);

const addToCart = () => {
  const id = post.value?.Id;
  if (id) {
    addItem(id);
  }
};
</script>

<template>
  <div class="page" v-if="post">
    <ProductItem :product="post" :button_callback="addToCart" />
    <ShopContainer />
  </div>
</template>

<style scoped></style>
