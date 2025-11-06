<script lang="ts" setup>
import noImage from '@/assets/noImage.svg'
const { 
    image = noImage,
    name = "undefined",
    price = 1000000, 
} = defineProps({
    image: String,
    name: String,
    price: Number
})
</script>

<template>
    <div class="item">
        <img :src="image" alt="no image available" class="image" />
        <h4 class="name">{{ name }}</h4>
        <p class="price">${{ price }}</p>
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