<script setup lang="ts">
import ShopItem from "./ShopItem.vue";
import { Product } from "@/template";

const { shopItems } = defineProps({
  shopItems: Array<Product>,
});
</script>

<template>
  <div class="shop-container">
    <div class="shop-item" v-for="item in shopItems">
      <ShopItem :key="item.Id" :product="item" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.shop-container {
  display: flex;
  overflow-x: auto;
}

.items-list {
  list-style: none;
}
</style>
