<template>
  <div class="container" style="margin-top:100px">
    <h1>hi {{user}}</h1>    
      <div class="wrap">
        <button class="btn btn-primary" data-toggle="modal" data-target="#create">Create Article</button>
        <div class="modal" tabindex="-1" role="dialog" id='create'>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create new article</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>title</p>
                        <input type="text" class="form-control"  placeholder="title" v-model="title">
                    </div>
                    <input class="btn btn-outline-primary" type="file" @change="onFilePicked" ref="file" accept="image/*">
                    <div class="container">
                      <p>content</p>
                      <textarea rows="4" v-model="content"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="uploadArticle" data-dismiss="modal">submit</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <h2>Your Article: </h2>
    <ArticleProf></ArticleProf>
  </div>
</template>

<script>
import ArticleProf from './ArticleProf'
import FormData from 'form-data'
export default {
  name: 'Profile',
  data : function () {
    return {
      user: window.localStorage['blog-name'],
      title: '',
      content: '',
      file: ''
    }
  },
  components: {
    ArticleProf
  },
  methods: {
    onFilePicked() {
      this.file = this.$refs.file.files[0]
    },
    uploadArticle () {
      this.file = this.$refs.file.files[0]
      let headers = {
        token : window.localStorage["blog-token"]
      }
      console.log(this.file)
      let formData = new FormData()
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('image', this.file)
      let payload = {
        headers, formData  
      }
      this.$store.dispatch('upload', payload)
    }
  }
}
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
