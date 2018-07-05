<template>
  <div>
    <div style="text-align:center" v-if="!loadStat">
      <img src="https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif" alt="">
      <h1>Please Wait</h1>
    </div>
    <div class="container" style="margin-top:100px" v-if="loadStat">
      <div class="container">
        <button type="button" class="btn btn-info btn-lg" @click="backpage">back to question</button>
      </div>
      <br><br>
      <div >
        <div class="d-flex flex-row" style="background-color:white">
          <div class="p-2">
            <button type="button" class="btn btn-secondary" style="text-align:center" @click="voteup">vote up</button>
            <br><br>
            <h3 style="text-align: center;">vote: {{singQues.vote}}</h3>
            <br>
            <button type="button" class="btn btn-secondary" style="text-align:center" @click="votedown">vote down</button>
          </div>
          <div class="p-2">
            <h2 class="card-title">{{singQues.title}}</h2>
            <h6 class="card-subtitle mb-2 text-muted" >posted by: {{singQues.userId.name}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">user id: {{singQues.userId._id}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">posted at: {{singQues.createdAt | moment("MMMM Do YYYY, h:mm:ss")}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">last update: {{singQues.updatedAt | moment("MMMM Do YYYY, h:mm:ss")}}</h6>
            <div style="text-align: justify;" v-html="singQues.question"></div>
            <button type="button" class="btn btn-danger" v-if="idUser == this.singQues.userId._id" @click="deleteQues">Delete Question</button>
          </div>
        </div>
        <div class="container">
          <h1>Answer</h1>
          <wysiwyg v-model="answer" />
          <br>
          <button type="button" class="btn btn-info btn-sm" @click="postAnswer">post answer</button>
          <br><br>
          <br>
          <div class="card" style="width: auto; margin-bottom:20px" v-for="(answer, index) in singQues.answers" v-bind:key="index" v-if="loadStat">      
          <div class="d-flex flex-row">
            <div class="p-2">
              <button type="button" class="btn btn-secondary" style="text-align:center" >vote up</button>
              <br><br>
              <h3 style="text-align: center;">vote: {{answer.vote}}</h3>
              <br>
              <button type="button" class="btn btn-secondary" style="text-align:center" >vote down</button>
            </div>
            <div class="p-2">
              <h5 class="card-title">{{answer.user}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">last update: {{answer.posted | moment("MMMM Do YYYY, h:mm:ss")}}</h6>
              <div style="text-align: justify;" v-html="answer.answer"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'
import swal from 'sweetalert'
export default {
  name: 'Detail',
  data: function () {
    return {
      idUser: localStorage.getItem('blog-id'),
      answer: ''
    }
  },
  computed: {
    ...mapState([
      'singQues', 'loadStat'
    ])
  },
  created() {
    let tokenStore = localStorage.getItem('oflow-token')
    if(!tokenStore){
      this.$router.push({'path' : '/'})
    }
    this.$store.dispatch('makeStatLoad', false)
    this.$store.dispatch('getOneQuestion', this.$route.params.id)
  },
  methods: {
    backpage() {
      this.$router.push({'path' : '/question'})
    },
    deleteQues() {
      var r = confirm("delete Question!");
      if (r == true) {
        this.godeleteQues()
      }
    },
    godeleteQues () {
      let id = this.$route.params.id
      let headers = {
            token : window.localStorage["oflow-token"]
          }
      let payload = {
        id,
        headers
      }
      this.$store.dispatch('deleteQuestion', payload)
      this.$router.push({'path' : '/question'})
    },
    voteup(){
      let voted = this.singQues.vote + 1
      this.vote(voted)
    },
    votedown(){
      let voted = this.singQues.vote - 1
      this.vote(voted)
    },
    vote(vote) {
      let idUser = window.localStorage["oflow-id"]
      if(idUser == this.singQues.userId._id){
        swal('you are not allowed to vote your own post')
      }else{
        let id = this.$route.params.id
        let body = {
                vote
            }
        let headers = {
              token : window.localStorage["blog-token"]
            }
        let payload = {
          id,
          body,
          headers
        }
        console.log('payload', payload)
        this.$store.dispatch('updateVote', payload) 
      }     
    },
    postAnswer() {
      let idPage = this.$route.params.id
      let body = {
        user: window.localStorage["blog-name"],
        answer: this.answer
      }
      let headers = {
        token : window.localStorage["blog-token"]
      }
      let  id = this.$route.params.id
      let payload = {
        id,
        body,
        headers
      }
      this.$store.dispatch('uploadAnswer', payload)
    }
  }
}
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
