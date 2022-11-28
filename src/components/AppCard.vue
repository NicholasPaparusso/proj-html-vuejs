<script>

import {store} from '../data/store'
import { getIntPrice, getDecPrice, getImage } from '../data/functions'
export default {
name : 'AppCard',

props:{
card: Object,
},

data(){
  return{
    store,
    getIntPrice,
    getDecPrice,
    getImage,
  }
},




}
</script>

<template>
  <div class="np-card d-flex flex-column">

   <div class="image-container">
    <img :src="getImage(this.card.imgUrl)" alt="">
   </div>

   <div class="info d-flex flex-column">
    <span>{{getIntPrice(this.card.price)}}.<small>{{getDecPrice(this.card.price)}}</small></span>
    <h4><a href="#">{{card.title}}</a></h4>
    <div>
     <span><i class="fa-regular fa-file-lines"></i>{{card.nLesson}}</span>
      <span><i class="fa-regular fa-user"></i>{{card.nStudents}}</span>
    </div>
   </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

  .np-card{
    overflow: hidden;
    border-radius: 5px;
    transition: all .5s;
    padding-bottom: 70px;
    margin-bottom: 20px;
    .image-container{
      cursor: pointer;
    }

    &:hover{
      box-shadow: 0 15px  60px rgba($color: black, $alpha: .12) ;
    }

    &:hover img{
      transform: scale(1.1);
    }
    
    .info{
      padding: 20px 0 0 30px  ;

      &>span{
        color: $primary;
        font-weight: 700;
        font-size: 22px;
        small{
          font-size: 16px;
        }
      }

      h4{
        font-size: 20px;
        font-weight: 700;
        line-height: 40px;
        transition: all .5s;
        padding-bottom: 20px;
        color: $secondary;
        &:hover{
          color: $primary;
        }
      }

      div{

        span{
          font-size: 14px;
          font-weight: 500;
          color: $text;

          i{
            padding-right: 8px;
          }
        }

        span:first-of-type{
          padding-right: 30px;
        }
      }
    }

    .image-container{
      img{
        border-radius: 5px;
        transition: all 1s;
      }
    }

  }

</style>