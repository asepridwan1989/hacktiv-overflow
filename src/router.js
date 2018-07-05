import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Question from './views/Question.vue'
import Answer from './components/Answer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/answer/:id',
      name: 'answer',
      component: Answer
    }
  ]
})
