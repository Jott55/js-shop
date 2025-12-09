<script setup lang="ts">
import { getProductCart, getUser, sendChangedProducts } from "@/fetchdata";
import { onUnmounted, ref, watch } from "vue";
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

const modifedProductsList: IProductQuantity[] = [];

const whenChange = (product: IProductQuantity) => {
  changeProduct(product, updateTimeout);
};

function changeProduct(product: IProductQuantity, timeout: number) {
  const i = modifedProductsList.findIndex((value) => value.Id === product.Id);
  if (i >= 0) {
    modifedProductsList[i]!.Quantity = product.Quantity;
  } else {
    modifedProductsList.push(product);
  }
}

onUnmounted(() => {
  sendChangedProducts(modifedProductsList);
});

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
    <RouterLink to="/purchase">
      <CartPayment />
    </RouterLink>
  </div>
</template>
