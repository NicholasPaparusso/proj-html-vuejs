<script>
import {store} from '../data/store'
import AppCard from './AppCard.vue';

export default {
components:{
  AppCard,
},

name : 'AppCourse',


data(){
  return{
    store,
  }
},
}
</script>

<template>
  <div class="container np-container">

    <div class="row text-center">
      <h5>BEGIN YOUR JOURNEY AT MAXCOACH</h5>
      <h2>Latest  <span>Online Courses</span></h2>
    </div>

    <div class="row">
      <div v-for="(card,index) in store.cards" :key="index" class="col-4">
        <AppCard :card="card"/>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{
  padding-bottom: 100px;
}

  h5{
    padding-top: 30px ;
    font-size: 15px;
    color: lighten($text, $amount: 20);
  }

  h2{
    padding: 20px 0 80px 0;
    font-weight: 400;
    font-size: 48px;
    span{
      color: $primary;
    }
  }
</style>