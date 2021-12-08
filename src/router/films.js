import FilmsIndex from '@/views/Films/index'
import NowPlaying from '@/views/Films/NowPlaying'
import ComingSoon from '@/views/Films/ComingSoon'
import FilmDetail from '@/views/Films/FilmDetail'

const router = [
  {
    path: '/films',
    component: FilmsIndex,
    children: [
      { path: 'nowPlaying', component: NowPlaying },
      { path: 'comingSoon', component: ComingSoon }
    ]
  },
  {
    path: '/film/:filmId',
    component: FilmDetail
  }
]

export default router
