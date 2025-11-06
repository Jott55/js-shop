<script lang="ts" setup>
import { getData } from '@/fetchdata';
import ShopContainer from './ShopContainer.vue'

import {ref, watch} from 'vue'
import { useRoute} from 'vue-router'
import { ProductView } from '@/template';

const route = useRoute();

const post = ref<ProductView[]>([]);
const error = ref(null)
const loading = ref(false)

watch(() => route.params.id, fetchData, {immediate: true})

async function fetchData() {
  try {
    let res: Array<ProductView> = await getData()
    post.value = res
  } catch(err: any) {
    error.value = err
  } finally {
    loading.value = false
  }
}

</script>
<template>
  <div v-if="loading">
    Loading content: wait a moment
  </div>
  <div v-if="post">
    <ShopContainer class="shop-container" :shop-items="post" />
    <ShopContainer class="shop-container" />
    <ShopContainer class="shop-container" />
    {{ post }}
  </div>
</template>

<style scoped>
.shop-container {
  margin-top: 1rem;
}
</style>
