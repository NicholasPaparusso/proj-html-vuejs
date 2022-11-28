<script>
import AppButton from './AppButton.vue';
import AppBook from './AppBook.vue';
import { store } from '../data/store';
export default {
name : 'AppBookStore',

components:{
  AppButton,
  AppBook,
},
data(){
  return{
    store,
  }
}
}
</script>

<template>
  <div class="container-fluid container-xl np-container">

    <div class="row">

      <div class="col-12 col-xl-4 d-flex justify-center
      align-items-center flex-column d-xl-block">
        <h5>BOOK STORE ONLINE</h5>
        <h3>Be Alpha With <span>Wingman's Book</span></h3>
        <ul>
          <li><i class="fa-solid fa-check"></i> Help you understand yourself better</li>
          <li><i class="fa-solid fa-check"></i> Revealing mature tips</li>
          <li><i class="fa-solid fa-check"></i> Give the right advice</li>
          <li><i class="fa-solid fa-check"></i> Fascinating examples of alpha man</li>
        </ul>
        <AppButton text="Get Free Ebook" />
      </div>

      <div class="col-12 pt-5  col-xl-7 offset-xl-1 pt-xl-0">
        <div class="row">
          <div v-for="(book, index) in store.books" :key="index" class="col-6">
            <AppBook :book="book"/>
          </div>
          
        </div>
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
    font-size: 16px;
    color: $text-heading;
  }

  h3{
    color: $secondary;
 
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    span{
      color: $primary;
    }
  }

  ul{
    padding: 20px 5px;
    li{
      color: lighten($text, 20);
      font-size: 14px;
      font-weight: 600;
      line-height: 35px;
      i{
        color: $primary;
        padding-right: 20px;
        text-shadow: 0 1px;
      }
    }
  }


</style>