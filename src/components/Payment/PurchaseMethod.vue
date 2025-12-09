<script setup lang="ts">
import { ref } from "vue";

enum Methods {
  None,
  Bitcoin,
  Pix,
}

const currentMethod = ref(Methods.None);
</script>
<template>
  <div v-if="currentMethod === Methods.None">
    <h1>Payment Methods:</h1>
    <ul class="payment-list">
      <li class="payment-item" v-on:click="currentMethod = Methods.Bitcoin">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png"
          alt=""
          class="payment-img"
          NONE
        />
        <p>Bitcoin</p>
      </li>
      <li class="payment-item" v-on:click="currentMethod = Methods.Pix">
        <img
          class="payment-img"
          src="https://user-images.githubusercontent.com/741969/99538133-492fe280-298b-11eb-81a2-66779343e064.png"
          alt=""
        />
        <p>Pix</p>
      </li>
    </ul>
  </div>
  <div v-if="currentMethod === Methods.Bitcoin">
    <p>Payments are accepted in this wallet: fahsioudfuvma-ejmr8q23458u2-02i</p>
  </div>
  <div v-if="currentMethod === Methods.Pix">
    <p>You can pay using this qrcode</p>
  </div>
  <div v-if="currentMethod != Methods.None">
    <p>when we receive a confirmation a notification will be sent</p>
    <button v-on:click="currentMethod = Methods.None">
      Press here to cancel
    </button>
  </div>
</template>
<style scoped>
.payment-img {
  width: 4rem;
}
.payment-item {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
.payment-list {
  display: flex;
  column-gap: 4ch;
}
</style>
