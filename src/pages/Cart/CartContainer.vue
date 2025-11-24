<script setup lang="ts">
import { getProductCart } from "@/fetchdata";
import CartItem from "./CartItem.vue";
import { useRoute } from "vue-router";
import type { IProduct, IProductCart } from "@/template";
import { ref, watch } from "vue";

const products = ref<IProductCart[]>()

const fetchdata = async () => {
  const res = await getProductCart(1)
  console.log(res)
  if (res) {
    products.value = res
  }
}


const route = useRoute()
watch(() => route.params.id, () => {
  fetchdata()
}, {immediate: true})
</script>
<template>
  <ul class="cart-container">
      <li v-for="value in products" :key="'product-'+value.Id">
        <CartItem :product="value" />
      </li>
  </ul>
</template>

<style scoped></style>
