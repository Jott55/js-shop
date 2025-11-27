<script setup lang="ts">
const { purchaseButton = () => alert("not implemented") } = defineProps<{
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
  background-color: hsl(19, 79%, 62%);
  color: hsla(0, 0%, 100%, 0.954);
  border: 0;
}
.purchase-button:active {
  background-color: hsl(19, 79%, 40%);
  transform: scale(99%);
}
</style>
