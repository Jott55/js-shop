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
    <li v-for="value in products" :key="'product-' + value.Id">
      <CartItem
        :product="value"
        :add-button="
          () => {
            value.Quantity += 1;
            // TODO:
            // change product quantity on server
            changeProduct(value);
          }
        "
        :sub-button="
          () => {
            if (value.Quantity > 0) {
              value.Quantity -= 1;
            } else if (value.Quantity <= 0) {
              products.splice(
                products.findIndex((value) => value.Id),
                1,
              );
            }
            changeProduct(value);
          }
        "
      />
    </li>
  </ul>
</template>

<style scoped></style>
