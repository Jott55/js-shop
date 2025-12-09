<script lang="ts" setup>
import { ProductCart, type IProduct, type IProductCart } from "@/template";
import { onUnmounted, ref, watch } from "vue";
("@/template");

const isMouseDown = ref(false);
let interval: number;
let buttonBool: Boolean = true;
let timeButtonDown = ref(0);
let timeInterval = 500;

const setMouseDown = (button: Boolean) => {
  isMouseDown.value = true;
  buttonBool = button;
};
const setMouseUp = () => {
  isMouseDown.value = false;
};

const createInterval = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    buttonBool ? addButton() : subButton();
    timeButtonDown.value += 1;
  }, timeInterval);
};

const {
  product = new ProductCart(),
  addButton = () => {
    alert("add button not implemented");
  },
  subButton = () => {
    alert("sub button not implemented");
  },
} = defineProps<{
  product?: IProductCart;
  addButton?: () => void;
  subButton?: () => void;
}>();

watch(isMouseDown, () => {
  if (isMouseDown.value) {
    buttonBool ? addButton() : subButton();
    timeButtonDown.value += 1;
  } else {
    clearInterval(interval);
    timeButtonDown.value = 0;
    timeInterval = 500;
  }
});

onUnmounted(() => {
  clearInterval(interval);
  console.log("Bye interval", product.Name);
});

watch(timeButtonDown, () => {
  if (timeButtonDown.value === 1) {
    timeInterval = 500;
    createInterval();
  } else if (timeButtonDown.value === 2) {
    timeInterval = 300;
    createInterval();
  } else if (timeButtonDown.value === 4) {
    timeInterval = 100;
    createInterval();
  } else if (timeButtonDown.value >= 10) {
    timeInterval = 50;
    createInterval();
  }
});
</script>

<template>
  <div class="item" :id="'product' + product.Id">
    <img :src="product.Image_url" alt="no image available" class="image" />
    <h4 class="name">{{ product.Name }}</h4>
    <p class="price">${{ product.Price * product.Quantity }}</p>
    <div class="quantity-box">
      <button
        class="quantity-button"
        @mousedown="setMouseDown(true)"
        @mouseup="setMouseUp"
        @mouseleave="setMouseUp"
      >
        +
      </button>
      <p class="quantity-text">{{ product.Quantity }}</p>
      <button
        class="quantity-button"
        @mousedown="setMouseDown(false)"
        @mouseup="setMouseUp"
        @mouseleave="setMouseUp"
      >
        -
      </button>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  overflow: scroll;
  column-gap: 2rem;
  /* border: thick solid hsl(40, 90%, 70%); */
  margin: 1rem 1rem;
  background-color: var(--secondary);
  /* text-shadow: 1px 1px 2px hsl(0, 10%, 89%); */
}

.quantity-text {
  font-size: 2.5em;
  text-align: center;
  /* border: 1px solid black; */
}
.quantity-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  /* border: 1px solid black; */
}

.quantity-button {
  font-size: 2.5em;
  background: none;
  padding: 0;
  border: 0;
  /* border: 1px solid black; */

  color: var(--on-terciary);
}

.quantity-button:active {
  transition: color 100ms;
  color: var(--terciary);
}

.image {
  width: 10rem;
  object-fit: cover;
}

.name {
  font-family:
    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5em;
  color: var(--on-secondary);
}

.price {
  font-size: 1.6em;
  font-family:
    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: var(--success);
  text-shadow: 1px 1px 2px var(--success-shadow);
}
</style>
