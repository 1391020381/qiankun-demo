const router = [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/index.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/home/index.vue")
    }
  ]
  
  export default router