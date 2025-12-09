<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Product, type IProduct } from "@/template";

const moneySign = "$";

const { product = new Product() } = defineProps<{
  product?: IProduct;
}>();
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
  /* border: 1px hsl(0, 0%, 56%); */
  font-family: sans-serif;
  padding-top: 0.4rem;
}

.product-name {
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 2em;
}

.product-price {
  padding: 0;
  margin-top: 1rem;
  color: var(--on-primary);
  text-shadow: 1px 1px 2px var(--on-primary-shadow);
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
  color: var(--success);
  text-shadow: 1px 1px 1px var(--success-shadow);
}
</style>
