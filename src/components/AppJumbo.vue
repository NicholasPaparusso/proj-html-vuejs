<script>

import AppHeader from './AppHeader.vue';

export default {
name : 'AppJumbo',

components:{
  AppHeader,
}

}
</script>

<template>
  <div class="main-wrapper">

  <div class="container-fluid container-xl np-container d-flex flex-column justify-content-end">

    <AppHeader/>

    <div class="row">

      <div class="col-12 col-lg-6 cta d-flex align-items-center flex-column d-lg-block ">
        <h5>I'M WINGMAN</h5>
        <h1>Peace On Earth A Wonderful Wish But No Way</h1>
        <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
        <button class="btn np-button">Get Started For Free <i class="fa-solid fa-arrow-right"></i> </button>
      </div>

      <div class="col-12 col-lg-6 image-container">

        <img  src="../assets/img/home-movation-hero-image.png" alt="hero-image">
        <img src="../assets/img/home-movation-shape-face.png" alt="background shape-face">
      </div>

    </div>

  </div>


  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;


.main-wrapper{
  background-image: url('../assets/img/background-pattern-wavify.png');
  background-repeat: repeat;
  background-color: #f6f6fd ;
  overflow: hidden;
}
.np-container{
  .cta{
    padding-top: 140px ;

    h5{
      font-weight: 500;
      font-size: 1em;
      padding-bottom: 10px;
    }

    h1{
      font-weight: 400 ;
      font-size: 56px ;
      line-height: 75px;
      max-width: 440px;
    }

    p{
      font-size: 16px;
      padding: 20px 0;
      color: #696969;
      max-width: 440px;
      line-height: 30px;
      font-weight: 500;
    }

    .np-button{
      width: 274px;
      min-height: 55px;
      background-color: $primary;
      color: #fff;
      font-weight: 700;
      font-size: .8em;
      transition: all .5s;

      i{
        margin-left: 15px;
      }

      &:hover{
        background-color: $secondary;
      }
    }
  }
  .image-container{
     background-size: contain;
     padding-top: 55px;
     background-repeat: no-repeat;
     background-attachment:local;
     background-position: 50px 200px;
     display: flex;
     justify-content: center;
     align-items: flex-end;
     position: relative;
     top: 0;
     overflow-x: visible;
    
    img:first-of-type{
      max-width: 535px;
      max-height: 653px;
      min-width: 246px;
      min-height: 300px;
      z-index: 1;
    }

    img:last-of-type{
      position: absolute;
      left: 20%;
      bottom: -10%;
      max-width: 534px;
      max-height: 600px;
      min-width: 267;
      min-height: 300px ;
    }

   }

   @media only screen and (max-width: 993px){
.cta{
  padding-top: 40px;
}
  h1{
    font-size: 36px !important;
    text-align: center;
  }
  img{
    padding: 0 50px 0 50px
  }
}
}


</style>