import ItemView from '@/pages/Admin/ItemView.vue'
import CartView from '@/pages/Cart/CartView.vue'
import ProductView from '@/pages/Product/ProductView.vue'
import ShopView from '@/pages/Shop/ShopView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ShopView },
    { path: '/product/:id', component: ProductView },
    { path: '/cart', component: CartView},
    { path: '/admin', component: ItemView}
  ],
})

export default router
