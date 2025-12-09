<script setup lang="ts">
import PurchaseMethod from "@/components/Payment/PurchaseMethod.vue";
import PurchaseDone from "@/components/Payment/PurchaseDone.vue";
import { ref } from "vue";

const hasPayed = ref(false);
</script>
<template>
  <div v-if="!hasPayed">
    <PurchaseMethod />
    <button
      style="margin-left: 90vw; padding: 0; font-size: 0.3em"
      v-on:click="hasPayed = true"
    >
      Pay
    </button>
  </div>
  <div v-if="hasPayed">
    <PurchaseDone />
  </div>
</template>
<style scoped></style>
