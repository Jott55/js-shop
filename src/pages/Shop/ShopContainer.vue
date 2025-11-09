<script setup lang="ts">
import ShopItem from './ShopItem.vue'
import { Product} from '@/template';


const {
  shopItems
} = defineProps({
  shopItems: Array<Product>
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
