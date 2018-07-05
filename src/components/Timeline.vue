<template>
  <div class="container">
    <nav class="navbar navbar-light bg-dark" style="margin-bottom:20px">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="query">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search">Search</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style="margin-left:10px" @click="logout">Logout</button>
      </form>
    </nav>
    <h1 style="text-align:center; margin-top:20px; font-family: 'Slabo 27px', serif;">Create new question</h1>
    <div class="modal-body">
        <input type="text" class="form-control"  placeholder="title" v-model="title">
    </div>
    <div class="container">
      <wysiwyg v-model="question" />
      <br>
      <button type="button" class="btn btn-primary" @click="addQuestion">submit</button>      
    </div>
    <br>
    <div style="text-align:center" v-if="!loadStat">
      <img src="https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif" alt="">
       <h1>Please Wait</h1>
    </div>
    <div class="card" style="width: auto; margin-bottom:20px" v-for="(question, index) in questions" v-bind:key="index" v-if="loadStat">  
    <div class="row">
      <div class="col">
        <h2 style="text-align:center; margin-top:auto">vote: {{question.vote}}</h2>
        <h2 style="text-align:center;">Answer: {{question.answers.length}}</h2>
      </div>
      <div class="col">
        <div class="column has-text-centered">
          <router-link :to="{ name: 'answer', params: { id: question._id }}"><h4 style="text-align:center; margin-top:auto">{{question.title}}</h4></router-link>
          <router-view/>
        </div>        
        <h5 class="card-subtitle mb-2 text-muted">posted by: {{question.userId.name}}</h5>
        <h5 class="card-subtitle mb-2 text-muted">user id: {{question.userId._id}}</h5>
      </div>
    </div>
  </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Timeline',
  data: function () {
    return {
      query: '',
      title: '',
      question:'',
      user: window.localStorage['oflow-name'],
    }
  },
  computed: {
    ...mapState([
      'questions', 'loadStat'
    ])
  },
  created () {
    // let headers = {
    //     token : window.localStorage["oflow-token"]
    //   }
    // this.$store.dispatch('getAllPost', headers)    
  },
  methods: {
    search () {
      let payload = this.query
      this.$store.dispatch('search', payload)
    },
    logout () {
      localStorage.removeItem('oflow-token')
      localStorage.removeItem('oflow-name')
      localStorage.removeItem('oflow-id')
      this.$store.commit('setStatLog', false)
    },
    addQuestion () {
      let body = {
        username: window.localStorage["oflow-name"],
        title: this.title,
        question: this.question
      }
      let headers = {
        token : window.localStorage["oflow-token"]
      }
      let payload = {
        body,
        headers
      }
      this.$store.dispatch('upload', payload)      
    }
  }
}
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
