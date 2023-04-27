const router = [
  {
    path: "/pageOne",
    meta: {
      keepAlive: true
    },
    component: resolve => require(['@/pages/pageOne'], resolve)
  }, {
    path: "/pageTwo",
    component: resolve => require(['@/pages/pageTwo'], resolve)
  }
]

export default router