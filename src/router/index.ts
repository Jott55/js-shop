import AdminView from "@/pages/Admin/AdminView.vue";
import ItemView from "@/pages/Admin/AdminView.vue";
import CartView from "@/pages/Cart/CartView.vue";
import ProductView from "@/pages/Product/ProductView.vue";
import ShopView from "@/pages/Shop/ShopView.vue";
import UserView from "@/pages/User/UserView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: ShopView },
    { path: "/product/:id", component: ProductView },
    { path: "/cart", component: CartView },
    { path: "/admin", component: AdminView },
    { path: "/profile", component: UserView },
  ],
});

export default router;
