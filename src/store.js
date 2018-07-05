import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorLog: '',
    error:'',
    questions: '',
    user: '',
    singQues: '',
    messagewarn: '',
    statLog: '',
    titlesing: 'default',
    contentsing:'default',
    loadStat:false
  },
  mutations: {
    setLoadStat(state, payload) {
      state.loadStat = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setStatLog (state, payload) {
      state.statLog = payload
    },
    setWarn (state, payload) {
      state.messagewarn = payload
    },
    setErrorLog (state, payload) {
      console.log('commit', payload)
      state.errorLog = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
      state.loadStat = true
    },
    setOneQuestion (state, payload) {
      state.singQues = payload
      state.titlesing = payload.title
      state.contentsing = payload.content
      state.loadStat = true
    },
    setStatSing (state, payload) {
      state.titlesing = payload
    },
    pushData (state, payload) {
      if(state.questions == undefined){
        state.questions = []
      }
      console.log(state.questions, payload)
      state.questions.push(payload)
    }
  },
  actions: {
    signup: function (context, payload) {
      console.log(payload)
      axios.post('http://35.240.160.136/users/signup', payload)
        .then(response => {
          console.log('success', response)
          swal('successfuly registered')
        })
        .catch(function (err) {
          console.log(err.response.data.message)
          let errorMsg = err.response.data.message
          context.commit('setError', errorMsg)
        })
    },
    signin: function (context, payload) {
      axios.post('http://35.240.160.136/users/signin', payload)
        .then(response => {
          console.log('success', response.data)
          let token = response.data.token
          let userblog = response.data.dataUser.name
          let id = response.data.dataUser._id
          localStorage.setItem('oflow-id', id)
          localStorage.setItem('oflow-name', userblog)
          localStorage.setItem('oflow-token', token)
          context.commit('setStatLog', true)
        })
        .catch(function (err) {
          console.log(err.response.data.message)
          let errorMsg = err.response.data.message
          context.commit('setErrorLog', errorMsg)
        })
    },
    fbnGoogSignin: function (context, payload) {
      axios.post('http://35.240.160.136/users/signinFB', payload)
      .then(response => {
        console.log('success', response.data)
        let token = response.data.token
        let userblog = response.data.dataUser.name
        let id = response.data.dataUser._id
        localStorage.setItem('oflow-id', id)
        localStorage.setItem('oflow-name', userblog)
        localStorage.setItem('oflow-token', token)
        context.commit('setStatLog', true)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    signinSteam: function (context, payload) {
      axios({
        method: 'get',
        url: 'http://35.240.160.136/users/steam/authenticate'
      }).then(response => {

        var myWindow = window.open(response.data, "myWindow", "width=500, height=700");
        // setTimeout(function(){ myWindow.close() }, 10000);
        // myWindow.close()
      }).catch(err => {
        console.log(err);
      })
    },
    signinGithub: function (context, payload) {
      OAuth.initialize('M4L8E9dVTfx5qS1IWslOYc0gx_c')
      OAuth.popup('github').then((github) => {
        github.me().then((data) => {
          const body = {
            name: data.alias,
            email: data.email,
            password: data.id + data.alias
          }
          console.log(body)
          axios.post('http://35.240.160.136/users/signinFB', body)
          .then(response => {
            console.log('success', response.data)
            let token = response.data.token
            let userblog = response.data.dataUser.name
            let id = response.data.dataUser._id
            localStorage.setItem('oflow-id', id)
            localStorage.setItem('oflow-name', userblog)
            localStorage.setItem('oflow-token', token)
            context.commit('setStatLog', true)
          })
          .catch(function (err) {
            console.log(err)
          })
        })
      })
    },
    upload: function (context, payload) {
      let headers = payload.headers
      axios.post('http://35.240.160.136/questions', payload.body, {headers})
      .then(response => {
        axios.get('http://35.240.160.136/questions/home')
        .then(response => {
          console.log('success', response.data)
          context.commit('setQuestions', response.data.data)
        })
        swal('successfuly created new article')
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    deleteQuestion: function (context, payload) {
      axios.delete(`http://35.240.160.136/questions/${payload.id}`, {headers: payload.headers})
        .then( response => {
          axios.get('http://35.240.160.136/questions/home')
          .then(response => {
            swal('successfuly deleted question')
            context.commit('setQuestions', response.data.data)
          })          
        })
        .catch( err => {
            // this.error = err.response.data.message
        })
    },
    getAllQuestion: function (context, payload) {
      axios.get('http://35.240.160.136/questions/home')
      .then(response => {
        console.log('success', response.data)
        context.commit('setQuestions', response.data.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    updateQuestion: function (context, payload) {
      console.log(payload)
      axios.put(`http://35.240.160.136/questions/${payload.id}`, payload.body, {headers: payload.headers})
      .then(response => {
        console.log('success', response.data)
        context.commit('setStatSing', 'default')
        swal('successfuly updated article') 
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    search: function (context, payload) {
      axios.get(`http://35.240.160.136/questions/search?title=${payload}`)
      .then(response => {
        console.log('success', response.data)
        context.commit('setQuestions', response.data.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    getOneQuestion (context, payload) {
      axios.get(`http://35.240.160.136/questions/view/${payload}`)
      .then(response => {
        console.log('success', response.data)
        context.commit('setOneQuestion', response.data.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    updateVote (context, payload) {
      axios.put(`http://35.240.160.136/questions/vote/${payload.id}`, payload.body, {headers: payload.headers})
      .then(response => {
        axios.get(`http://35.240.160.136/questions/view/${payload.id}`)
        .then(response => {
          console.log('success', response.data)
          swal('successfuly add answer') 
          context.commit('setOneQuestion', response.data.data)
        }) 
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    makeStatLoad (context, payload) {
      console.log('kok ga mau mampir')
      context.commit('setLoadStat', payload)
    },
    uploadAnswer: function (context, payload) {
      let headers = payload.headers
      console.log('pay load',payload.body)
      axios.put(`http://35.240.160.136/questions/add-answer/${payload.id}`, payload.body, {headers})
      .then(response => {
        axios.get(`http://35.240.160.136/questions/view/${payload.id}`)
        .then(response => {
          console.log('success', response.data)
          swal('successfuly add answer') 
          context.commit('setOneQuestion', response.data.data)
        })
      })
      .catch(function (err) {
        console.log(err)
      })
    },
  }
})
