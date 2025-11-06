<script setup lang="ts">
import ShopItem from './ShopItem.vue'
import { ProductView } from '@/template';


const {
  shopItems
} = defineProps({
  shopItems: Array<ProductView>
})

</script>

<template>
  <div class="shop-container">
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
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
