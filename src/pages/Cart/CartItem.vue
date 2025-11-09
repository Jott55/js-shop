<script lang="ts" setup>
import noImage from '@/assets/noImage.svg'
import { Product, ProductDefault } from '@/template';

const { 
    product =  new ProductDefault() 
} = defineProps({
    product: Product
})
</script>

<template>
    <div class="item" :id="'product'+product.Id">
        <img :src="product.Image_url" alt="no image available" class="image" />
        <h4 class="name">{{ product.Name }}</h4>
        <p class="price">${{ product.Price }}</p>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    column-gap: 1rem;
    align-items: center;
}

.image {
    width: 20rem;
    height: 10rem;
    object-fit: cover;
}

.name {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5em;
}

.price {
    font-size: 1.3em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: hsla(0, 0%, 0%, 0.793);
    text-shadow: 1px 1px 2px rgb(179, 179, 179);
}
</style>