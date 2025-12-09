<script setup lang="ts">
import {
  changeProduct as changeProduct,
  getProductCart,
  getUser,
  sendChangedProducts,
} from "@/fetchdata";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import CartContainer from "@/components/Cart/CartContainer.vue";
import CartPayment from "@/components/Cart/CartPayment.vue";
import { type IProductCart, type IProductQuantity } from "@/template";
import ShopView from "@/pages/ShopView.vue";

const products = ref<IProductCart[]>([]);
const loading = ref(true);
const error = ref(false);
const updateTimeout = 5 * 1000; // ms

const fetchdata = async () => {
  try {
    const res = await getProductCart();
    if (res) {
      products.value = res;
    } else {
      error.value = true;
    }
    loading.value = false;
  } catch (e) {
    error.value = true;
    console.error("not possible fetch data", e);
  }
};

const whenChange = (product: IProductQuantity) => {
  changeProduct(product, updateTimeout);
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
  <div v-if="!error && !loading">
    <CartContainer :products="products" :change-product="whenChange" />
    <CartPayment :purchase-button="whenPurchase" />
  </div>
</template>
