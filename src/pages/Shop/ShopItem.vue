<script setup lang="ts">
import defaultImg from "../../assets/noImage.svg";
import { RouterLink } from "vue-router";
import { Product } from "@/template";

const moneySign = "$";

const { product = new Product(1, "undefined", defaultImg, 3) } = defineProps({
  product: Product,
});
</script>
<template>
  <RouterLink :to="'/product/' + product.Id">
    <div class="product-card">
      <img
        :src="product.Image_url"
        alt="product image"
        class="product-image"
        loading="lazy"
      />
      <p class="product-name">{{ product.Name }}</p>
      <p class="product-price">{{ moneySign }}{{ product.Price }}</p>

      <a href="" class="free-trial">Click here to apply for a free trial</a>
    </div>
  </RouterLink>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20rem;
  height: 30rem;
  border-color: hsl(0, 0%, 56%);
  border-style: solid;
  border-width: 1px;
  font-family: sans-serif;
  padding-top: 0.4rem;
}

.product-name {
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 0;
}

.product-price {
  padding: 0;
  margin-top: 1rem;
  color: hsla(0, 0%, 0%, 0.793);
  text-shadow: 1px 1px 2px rgb(179, 179, 179);
}

.product-image {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 20%;
}

.free-trial {
  margin-bottom: 1rem;
  background: none;
  border: none;
  color: green;
}
</style>
