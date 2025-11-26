<script lang="ts" setup>
import { ProductCart, type IProduct, type IProductCart } from "@/template";
 "@/template";

const { product = new ProductCart() } = defineProps<{
  product?: IProductCart
}>();
</script>

<template>
  <div class="item" :id="'product' + product.Id">
    <img :src="product.Image_url" alt="no image available" class="image" />
    <h4 class="name">{{ product.Name }}</h4>
    <p class="price">${{ product.Price }}</p>
    <p class="quantity">{{ product.Quantity }}</p>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr;
  align-items: center;
  border: thick solid hsl(40, 100%, 60%);
  margin: 1rem 0;
}

.quantity {
  text-align: end;
  margin-right: 5rem;
}

.image {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}

.name {
  font-family:
    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5em;
}

.price {
  font-size: 1.3em;
  font-family:
    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: hsla(0, 0%, 0%, 0.793);
  text-shadow: 1px 1px 2px rgb(179, 179, 179);
}
</style>
