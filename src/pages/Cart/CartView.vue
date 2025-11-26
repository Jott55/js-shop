<script setup lang="ts">
import { getProductCart } from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import CartContainer from "../../components/Cart/CartContainer.vue";
import CartPayment from "../../components/Cart/CartPayment.vue";
import { type IProductCart } from "@/template";

const products = ref<IProductCart[]>();

const fetchdata = async () => {
  const res = await getProductCart(1);
  console.log(res);
  if (res) {
    products.value = res;
    console.log(products);
  }
};

const route = useRoute();
watch(
  () => route.params.id,
  () => {
    fetchdata();
  },
  { immediate: true },
);
</script>

<template>
  <CartContainer :products="products" />
  <CartPayment />
</template>
