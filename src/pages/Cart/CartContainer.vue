<script setup lang="ts">
import { getData } from "@/fetchdata";
import CartItem from "./CartItem.vue";
import { useRoute } from "vue-router";
import type { IProduct } from "@/template";
import { ref, watch } from "vue";

const products = ref<IProduct[]>()

const fetchdata = async () => {
  const res = await getData()

}


const route = useRoute()
watch(() => route.params.id, () => fetchdata)
</script>
<template>
  <ul class="cart-container">
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
  </ul>
</template>

<style scoped></style>
