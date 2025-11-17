<script setup lang="ts">
import defaultImage from "@/assets/noImage.svg";
import { ProductCart, ProductCartDefault } from "@/template";

const { product = new ProductCartDefault() } = defineProps({
  product: ProductCart,
});
</script>
<template>
  <div class="product-container">
    <img
      :src="product.Image_url"
      alt="no image available"
      class="product-image"
    />
    <div class="product-content" :id="'product-' + product.Id">
      <h2 class="product-title">{{ product.Name }}</h2>
      <p class="product-info">
        {{ product.Description }}
      </p>
      <div class="product-payment">
        <button class="product-button">Add it to cart</button>
        <p class="product-price">${{ product.Price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  display: flex;
  overflow-x: auto;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
}

.product-image {
  grid-column: 1;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
}

.product-content {
  margin-left: 2rem;
  margin-right: 2rem;
  max-width: 40rem;
}

.product-title {
  grid-column: 2;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

.product-info {
  font-size: 1.3em;
  font-family:
    "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}

.product-payment {
  display: flex;
  align-items: center;
  column-gap: 3rem;
}

.product-button {
  min-width: 10rem;
  min-height: 5rem;
  font-size: 2em;
  padding: 1rem;
  background-color: hsl(120, 77%, 54%);
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px black;
}

.product-price {
  font-family: "Courier New", Courier, monospace;
  font-size: 2em;
  color: hsla(0, 0%, 0%, 0.793);
  text-shadow: 1px 1px 2px rgb(179, 179, 179);
}
</style>
