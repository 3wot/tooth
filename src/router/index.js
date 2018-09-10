import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ClinicDetails from '@/components/ClinicDetails'
import ClinicIntro from '@/components/ClinicIntro'
import Team from '@/components/Team'
import Doctor from '@/components/Doctor'
import Env from '@/components/Env'
import Deal from '@/components/Deal'
import Book from '@/components/Book'
import List from '@/components/List'
import Login from '@/components/Login'
import TeachType from '@/components/TeachType'

// import TeachDetail from '@/components/TeachDetail'
// import MapDetail from '@/components/MapDetail'
// import MyCollection from '@/components/MyCollection'
// import Search from '@/components/Search'
// import Login from '@/components/Login'
// import CourseDetail from '@/components/CourseDetail'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/clinicdetail/:id',
      name: 'clinicdetail',
      component: ClinicDetails,
    },
    {
      path: '/clinicintro/:id',
      name: 'clinicintro',
      component: ClinicIntro,
    },
    {
      path: '/team/:id',
      name: 'team',
      component: Team,
    },
    {
      path: '/doctor/:id/:hid',
      name: 'doctor',
      component: Doctor,
    },
    {
      path: '/env',
      name: 'env',
      component: Env,
    },
    {
      path: '/deal',
      name: 'deal',
      component: Deal,
    },
    {
      path: '/book/:id',
      name: 'book',
      component: Book,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    // {
    //   path: '/teachtype',
    //   name: 'teachtype',
    //   component: TeachType
    // },
    // {
    //   path: '/teachdetail/:id',
    //   name: 'teachdetail',
    //   component: TeachDetail
    // },
    // {
    //   path: '/MapDetail/:address',
    //   name: 'mapdetail',
    //   component: MapDetail
    // },
    // {
    //   path: '/MyCollection',
    //   name: 'mycollection',
    //   component: MyCollection
    // },
    // {
    //   path: '/Search',
    //   name: 'search',
    //   component: Search
    // },
    // {
    //   path: '/Login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/CourseDetail/:id',
    //   name: 'coursedetail',
    //   component: CourseDetail
    // },
  ]
})
