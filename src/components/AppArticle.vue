<script>

import { store } from '../data/store';
import { getImage } from '../data/functions';
export default {
name : 'AppArticle',

props:{
article: Object,
},

data(){
  return{
    store,
    getImage
  }
}
}
</script>

<template>
  <div class="col-md-6 col-xl-3">
    <div class="d-flex flex-column item ">

      <div class="image-container">
        <img :src="getImage(this.article.imgUrl)" alt="">
      </div>

      <div class="content">
        <span><i class="fa-regular fa-calendar"></i>{{article.date}}</span>

        <h4> <a href="#">{{article.title}}</a></h4>

        <p>{{article.preview}}</p>
      </div>

    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.item{
  transition: all .5s;
  padding: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover img{
    transform: scale(1.2);
  }

  &:hover{
    box-shadow: 0 15px  60px rgba($color: black, $alpha: .12) ;
  }

  .image-container{
    overflow: hidden;
  }

  img{
    object-fit: cover;
    transition: all 1s;
    border-radius: 5px;
  }

  .content{
    padding: 10px;
  }

  span{
    padding: 20px 0;
    color: $text;
    font-size: 14px;
    font-weight: 500;

    i{
      padding-right: 12px;
    }
  }

  h4{
    color: $secondary;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    transition: all .5s;
    &:hover{
      color: $primary;
    }
  }

  p{
    color: $text;
    font-size: 15px;
    font-weight: 500;
  }
}


</style>