<script setup lang="ts">
import { getProductCart } from "@/fetchdata";
import CartItem from "./CartItem.vue";
import { useRoute } from "vue-router";
import { ProductCart, type IProduct, type IProductCart } from "@/template";
import { ref, watch } from "vue";

const { products = [new ProductCart()] } = defineProps<{
  products?: IProductCart[];
}>();
</script>
<template>
  <ul class="cart-container">
    <li v-for="value in products" :key="'product-' + value.Id">
      <CartItem :product="value" />
    </li>
  </ul>
</template>

<style scoped></style>
