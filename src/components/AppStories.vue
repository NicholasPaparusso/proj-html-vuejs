<script>
import { store } from '../data/store';
import { getImage } from '../data/functions';
export default {
name : 'AppStories',

data(){
  return{
    store,
    getImage
  }
},

methods:{

  prevNext(direction){
  direction ? this.store.counterStory++ : this.store.counterStory--  
  if(this.store.counterStory < 1){
    this.store.counterStory = 4
  }else if(this.store.counterStory > 4){
    this.store.counterStory = 1
   }
  }

}
}

</script>

<template>
<div class="container-fluid ">

  <div class="row ">

    <div class="np-col col-12 col-xl-6 d-flex align-items-center justify-content-center">

      <div  class="story" v-for="(story, index) in this.store.stories" :key="index">
        
        <div v-if="this.store.counterStory === index +1" class="d-flex flex-column text-center align-items-center justify-content-center ">
          <h5>REAL STORIES</h5>
          <P>{{story.story}}</P>
          <img :src="getImage(story.imgUrl)" :alt="story.name">
          <p>{{story.name}}</p>
          <p>/{{story.role}}</p>
        </div>

      </div>
    </div>

    <div class="np-btn d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-chevron-up pb-2" @click="this.prevNext(false)"></i>
       <span>{{this.store.counterStory}}/4</span>
      <i class="fa-solid fa-chevron-down pt-2" @click="this.prevNext(true)"></i>
    </div>

    <div class="np-col col-12 col-xl-6">
    <div class="image-container">
      <img src="../assets/img/home-movation-testimonial-image-768x562.jpg" alt="">
    </div>
    </div>

  </div>
    

</div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.container-fluid{
  padding: 0px ;
  position: relative;
  overflow: hidden;
  .np-btn{
    position: absolute;
    height: 90px;
    width: 90px;
    background-color: white;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    i{
      cursor: pointer;
    }
  }
}
.np-col{
  background-image: url('../assets/img/background-pattern-wavify.png');
  background-repeat: repeat;
  background-color: #f6f6fd ;
  height: 600px;
  img{
    object-fit: cover;
    max-height: 600px;
  }
}

.story{
  max-width: 500px;
  img{
    width: 85px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  h5{
    font-size:  15px;
    color: $primary;
  }

  p:first-of-type{
    font-size: 25px;
    line-height: 45px;
    font-weight: 600;
    padding: 30px 0;
  }

  p:nth-of-type(2){
    font-weight: 600;
    font-size:20px
  }

  p:nth-of-type(3){
    font-size:13px;
    color: $text;
  }
}

  
</style>