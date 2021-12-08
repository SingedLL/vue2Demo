import common from './common'
import films from './films'
import cinemas from './cinemas'
import news from './news'
import center from './center'

// import Vuex1 from '@/views/VuexTest/Vuex1'
// import Vuex2 from '@/views/VuexTest/Vuex2'

const routes = [
  ...common,
  ...films,
  ...cinemas,
  ...news,
  ...center
  // {
  //   path: '/vuex1',
  //   component: Vuex1
  // },
  // {
  //   path: '/vuex2',
  //   component: Vuex2
  // }
]

const router = new window.VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
