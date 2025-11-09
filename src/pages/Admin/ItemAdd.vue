<script setup lang="ts">
import { ref } from 'vue';
import ShopItem from '../Shop/ShopItem.vue';

import { postProduct } from '@/fetchdata';
import { ProductCartDefault } from '@/template';
import { deleteProduct } from '@/fetchdata';

const product = ref(new ProductCartDefault());
const items_length = ref(1);

product.value.Id = items_length.value;

const saveToJson = () => {
    postProduct(product.value)
}

const deleteProductById = () => {
    deleteProduct(product.value.Id);
}


</script>

<template>
    <h1>Add one item</h1>
    <div class="container">
        <div class="form">
            <div class="property">
                <label for="item-id">Id</label>
                <input type="number" id="item-id" v-model="product.Id" min="-1">
            </div>
            <div class="property">
                <label for="item-name">Item name</label>
                <input id="item-name" v-model="product.Name">
            </div>
            <div class="property">
                <label for="item-price">Price</label>
                <input type="number" id="item-price" v-model="product.Price">
            </div>
            <div class="property">
                <label for="item-image">Image url</label>
                <input id="item-image" v-model="product.Image_url">
            </div>
            <div class="property">
                <label for="item-description">Description</label>
                <textarea  id="item-description" v-model="product.Description"></textarea>
            </div>
            
            <button @click="saveToJson">Add item</button>
            <button @click="deleteProductById">delete product of id: {{ product.Id }}</button>
        </div>

        <div>
            <ShopItem :product="product"/>
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

.property > input, .property > textarea {
    max-width: 50%;
    font-size: 1.4em;
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>