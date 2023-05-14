import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { store } from "../store/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/LayoutAdmin.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/tasks",
          name: "tasks",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/tasks.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../views/LayoutMainAdmin.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/homecompany",
          name: "homecompany",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/MainCompany.vue"),
        },
        {
          path: "/registeradmin",
          name: "registeradmin",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/RegisterAdminsCompany.vue"),
        },
      ]
    },
    {
      path: "/registeradminnull",
      name: "registeradminnull",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AuthAdminNull.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auth.vue"),
    },

    {
      path: "/",
      name: "HomeLogOut",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeLogOut.vue"),
      children: [
        {
          path: "/Home",
          name: "MainLogOut",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/MainLogOut.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.Auth) {
      next();
      return;
    }
    next("/Home");
  } else {
    next();
  }
});
