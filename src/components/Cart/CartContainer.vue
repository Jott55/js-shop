<script setup lang="ts">
import { getProductCart } from "@/fetchdata";
import CartItem from "./CartItem.vue";
import { useRoute } from "vue-router";
import { ProductCart, type IProduct, type IProductCart } from "@/template";
import { ref, watch } from "vue";

const {
  products = [new ProductCart()],
  changeProduct = () => alert("not implemented"),
} = defineProps<{
  products?: IProductCart[];
  changeProduct?: (p: IProductCart) => void;
}>();
</script>
<template>
  <ul class="cart-container">
    <li v-for="product in products" :key="'product-' + product.Id">
      <CartItem
        :product="product"
        :add-button="
          () => {
            product.Quantity += 1;
            changeProduct(product);
          }
        "
        :sub-button="
          () => {
            if (product.Quantity > 1) {
              product.Quantity -= 1;
            } else if (product.Quantity <= 1) {
              products.splice(
                products.findIndex((value) => product.Id === value.Id),
                1,
              );
            }
            changeProduct(product);
          }
        "
      />
    </li>
  </ul>
</template>

<style scoped></style>
