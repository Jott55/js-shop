import AdminView from "@/pages/AdminView.vue";
import ItemView from "@/pages/AdminView.vue";
import CartView from "@/pages/CartView.vue";
import LoginView from "@/pages/LoginView.vue";
import ProductView from "@/pages/ProductView.vue";
import RegisterView from "@/pages/RegisterView.vue";
import ShopView from "@/pages/ShopView.vue";
import UserView from "@/pages/UserView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: ShopView },
    { path: "/product/:id", component: ProductView },
    { path: "/cart", component: CartView },
    { path: "/admin", component: AdminView },
    { path: "/profile", component: UserView },
    { path: "/login", component: LoginView},
    { path: "/signin", component: RegisterView}
  ],
});

export default router;
