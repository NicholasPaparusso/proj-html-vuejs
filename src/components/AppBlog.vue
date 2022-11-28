<script>
import AppArticle from './AppArticle.vue';
import { store } from '../data/store';
export default {
name : 'AppBlog',

components:{
AppArticle
},

data(){
  return{
    store
  }
}

}
</script>

<template>
  
  <div class="container-fluid container-xl np-container">
    <h5>BLOG UPDATED</h5>
    <h2>Interesting <span>articles updated</span> daily</h2>

    <div class="blog row">
      <AppArticle :article="article"
      v-for="(article, index) in store.blogs" :key="index"
      />
    </div>
    <a class="" href="#">VIEW ALL POSTS</a>
  </div>

</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{
  padding-top: 150px ;
  padding-bottom: 150px ;
  color: $text-heading;

  h5{
    font-size: 15px;
    
  }

  h2{
    font-size: 40px;
    span{
      color: $primary;
    }
  }
  .blog{
    padding: 40px 0;
  }

  a{
    color: $primary;
    text-align: center;
    display: block;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    top: 0;
     &::after{
      content: '';
      display: block;
      width: 110px ;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%);
      height: 1px;
      background-color: $primary;
     }
    
  }
}

</style>