import { createRouter, createWebHistory } from 'vue-router'
import ViewNoteList from '../views/ViewNoteList.vue'
import ViewNoteDetail from '../views/ViewNoteDetail.vue'
import ViewNoteAdd from '../views/ViewNoteAdd.vue'

const routes = [
  {
    path: '/',
    name: 'ViewNoteList',
    component: ViewNoteList,
    props: true
  },
  {
    path: '/detail/:id',
    name: 'ViewNoteDetail',
    component: ViewNoteDetail,
    props: route => ({
      id: Number(route.params.id)
    })
  },
  {
    path: '/add',
    name: 'ViewNoteAdd',
    component: ViewNoteAdd,
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
