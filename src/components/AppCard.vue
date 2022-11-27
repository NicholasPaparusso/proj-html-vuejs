<script>

import {store} from '../data/store'

export default {
name : 'AppCard',

props:{
card: Object,
},

data(){
  return{
    store,
  }
},

methods:{
  getImage(){
    return `/src/assets/img/${this.card.imgUrl}`
  }
}

}
</script>

<template>
  <div class="np-card d-flex flex-column">

   <div class="image-container">
    <img :src="getImage()" alt="">
   </div>

   <div>
    <span>{{card.price}}</span>
    <h4>{{card.title}}</h4>
    <div>
     <span><i class="fa-regular fa-file-lines"></i>{{card.nLesson}}</span>
      <span><i class="fa-regular fa-user"></i>{{card.nStudents}}</span>
    </div>
   </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

  .card{

    image{
      width: 300px;
      height: 200px;
    }
  }

</style>