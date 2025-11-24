import AdminView from "@/pages/Admin/AdminView.vue";
import ItemView from "@/pages/Admin/AdminView.vue";
import CartView from "@/pages/Cart/CartView.vue";
import LoginView from "@/pages/Login/LoginView.vue";
import ProductView from "@/pages/Product/ProductView.vue";
import RegisterView from "@/pages/Register/RegisterView.vue";
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
    { path: "/login", component: LoginView},
    { path: "/register", component: RegisterView}
  ],
});

export default router;
