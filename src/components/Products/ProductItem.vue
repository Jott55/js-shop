<script setup lang="ts">
import defaultImage from "@/assets/noImage.svg";
import { ProductDisplay, type IProductDisplay } from "@/template";

const {
  product = new ProductDisplay(),
  button_callback = () => alert("Not implemented"),
} = defineProps<{
  product?: IProductDisplay;
  button_callback?: (payload: PointerEvent) => void;
}>();
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
        <button class="product-button" @click="button_callback">
          Add it to cart
        </button>
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
  background-color: var(--success);
  color: var(--on-success);
  text-shadow: 1px 1px 2px black;
  border: none;
}

.product-button:active {
  transform: scale(99%);
  background-color: var(--success-trigger);
}

.product-price {
  font-family: "Courier New", Courier, monospace;
  font-size: 2em;
  color: var(--on-primary);
  text-shadow: 1px 1px 2px rgb(179, 179, 179);
}
</style>
