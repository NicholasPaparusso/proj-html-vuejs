<script>
import {store} from '../data/store'
import { getIntPrice, getDecPrice, getImage } from '../data/functions'
export default {
name : 'AppBook',
props:{
book: Object,
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

  <div class="book d-flex flex-column justify-center align-items-center">
    <div class="image-container">
      <img :src="getImage(this.book.imgUrl)" alt="">
    </div>
    <h4><a href="#">{{book.title}}</a></h4>
    <span>{{getIntPrice(this.book.price)}}.<small>{{getDecPrice(this.book.price)}}</small></span>
  </div>

</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;
h4{
        font-size: 20px;
        font-weight: 700;

        transition: all .5s;
        padding: 10px;
        color: $secondary;
        &:hover{
          color: $primary;
        }
      }
span{
        color: $primary;
        font-weight: 700;
        font-size: 22px;
        small{
          font-size: 16px;
        }
      }

      .image-container{
        cursor: pointer;
        overflow:hidden ;

        &:hover img{
          transform: scale(1.1);
        }
        
        img{
          transition: all 1s;
        }
      }

</style>