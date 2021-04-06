import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import NoteList from '../views/NoteList.vue'
import NoteDetail from '../views/NoteDetail.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   props: true
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'NoteList',
    component: NoteList,
    props: true
  },
  {
    path: '/detail/:id',
    name: 'NoteDetail',
    component: NoteDetail,
    props: route => ({
      id: Number(route.params.id)
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
