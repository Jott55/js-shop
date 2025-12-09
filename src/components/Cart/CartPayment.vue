<script setup lang="ts">
const { purchaseButton } = defineProps<{
  purchaseButton?: () => void;
}>();
</script>
<template>
  <div class="box">
    <button class="purchase-button" @click="purchaseButton">Purchase</button>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
}

.purchase-button {
  font-size: 2em;
  padding: 1rem;
  background-color: var(--terciary);
  color: var(--on-terciary);
  border: 0;
  border-radius: 0.8rem;
}
.purchase-button:active {
  background-color: var(--secondary);
  transform: scale(99%);
}
</style>
