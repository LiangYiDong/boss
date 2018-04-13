import Vue from 'vue'
import Router from 'vue-router'

import Job from '@/components/job/job'
import Jobdetail from '@/components/job/jobdetail'

import Company from '@/components/company/company'


import Message from '@/components/message/message'


import Me from '@/components/aboutme/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'job',
      component: Job,
      children:　[
        {
          path: '/detail/:jobId',
          name: 'detail',
          component: Jobdetail
        }
      ]
    },{
      path: '/company',
      name: 'company',
      component: Company
    },{
      path: '/message',
      name: 'message',
      component: Message
    },{
      path: '/aboutme',
      name: 'me',
      component: Me
    }
  ]
})
