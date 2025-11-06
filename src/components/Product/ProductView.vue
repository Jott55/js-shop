<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import ShopContainer from '../Shop/ShopContainer.vue'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
let productId = Number(route.params.id)

const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eveniet sapiente adipisci corporis iure aliquam illo deserunt quasi laboriosam ipsa nihil quam, harum aspernatur enim accusantium. Rerum accusantium nesciunt illum.'


</script>

<template>
  <div class="page">
    <ProductItem  />
    <ShopContainer></ShopContainer>
  </div>


</template>

<style scoped></style>
