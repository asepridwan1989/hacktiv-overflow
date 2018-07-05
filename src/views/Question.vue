<template>
  <div>
    <h1 style="text-align:center; margin-top:20px; font-family: 'Slabo 27px', serif;">Welcome to Hacktiv Overflow</h1>
    <h2 style="text-align:center; font-family: 'Slabo 27px', serif;">{{user}}</h2>
    <Timeline></Timeline>
  </div>
</template>

<script>
import Timeline from '../components/Timeline'
import {mapState} from 'vuex'
export default {
  name: 'Blog',
  components: {
    Timeline
  },
  
  computed: {
    ...mapState([
      'statLog'
    ])
  },
  data: function () {
    return {
      user: window.localStorage['oflow-name'],
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('blog-token')
      localStorage.removeItem('blog-name')
      localStorage.removeItem('blog-id')
      this.$store.commit('setStatLog', false)
      // window.location.reload(true);
    }
  },
  watch : {
    statLog () {
      // this.status = this.$store.state.status
      if (this.statLog == false) {
        this.$router.push({'path' : '/'})
      }
    }
  },
  created () {
    let tokenStore = localStorage.getItem('oflow-token')
    if(!tokenStore){
      this.$router.push({'path' : '/'})
    }
    this.$store.dispatch('getAllQuestion')
  },
}
</script>

<style>

</style>