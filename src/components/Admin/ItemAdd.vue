<script setup lang="ts">
import { ref } from "vue";
import ShopItem from "@/components/Shop/ShopItem.vue";

import { postProduct } from "@/fetchdata";
import { deleteProduct } from "@/fetchdata";
import { ProductAdd } from "@/template";
import { NodeBuilderFlags } from "typescript";

const product = ref(new ProductAdd());

const saveTodb = () => {
  postProduct(product.value);
};
</script>

<template>
  <h1>Add one item</h1>
  <div class="container">
    <div class="form">
      <div class="property">
        <label for="item-name">Name</label>
        <input id="item-name" v-model="product.Name" />
      </div>
      <div class="property">
        <label for="item-price">Price</label>
        <input type="number" id="item-price" v-model="product.Price" />
      </div>
      <div class="property">
        <label for="item-image">Image url</label>
        <input id="item-image" v-model="product.Image_url" />
      </div>
      <div class="property">
        <label for="item-description">Description</label>
        <textarea
          id="item-description"
          v-model="product.Description"
        ></textarea>
      </div>

      <button @click="saveTodb">Add item</button>
    </div>

    <div>
      <ShopItem :product="{ ...product, Id: 1 }" />
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form > button {
  margin: 2rem 0;
  width: 50%;
  padding: 1rem;
}

.property {
  display: flex;
  flex-direction: column;
}

.property > input,
.property > textarea {
  max-width: 50%;
  font-size: 1.4em;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
