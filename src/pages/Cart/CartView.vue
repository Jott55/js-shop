<script setup lang="ts">
import {
  changeProduct as changeProduct,
  getProductCart,
  sendChangedProducts,
} from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import CartContainer from "../../components/Cart/CartContainer.vue";
import CartPayment from "../../components/Cart/CartPayment.vue";
import { type IProductCart } from "@/template";
import ShopView from "../Shop/ShopView.vue";

const products = ref<IProductCart[]>();

const fetchdata = async () => {
  const res = await getProductCart(1);
  if (res) {
    products.value = res;
  }
};

const whenChange = (product: IProductCart) => {
  changeProduct(product);
};

const whenPurchase = () => {
  sendChangedProducts();
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
  <CartContainer :products="products" :change-product="whenChange" />
  <CartPayment :purchase-button="whenPurchase" />
</template>
