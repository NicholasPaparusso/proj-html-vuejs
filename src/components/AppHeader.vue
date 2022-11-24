<script>
export default {
name : 'AppHeader',

data(){
  return{
    nav : [
      {
        name: 'Home',
        links: ['lorem','lorem','lorem','lorem','lorem','lorem',],
      },

      {
        name: 'Pages',
        links: ['lorem','lorem','lorem',],
      },

      {
        name: 'Courses',
        links: ['lorem','lorem','lorem','lorem'],
      },
      {
        name: 'Features',
        links: ['lorem','lorem',],
      },
      {
        name: 'Blog',
        links: ['lorem','lorem','lorem',],
      },
      {
        name: 'Shop',
        links: ['lorem','lorem','lorem','lorem'],
      },
     
    ],

    isDdOn: false,
    indicator : null,
    openLoMenu : false
  }
},

methods:{

//  const logoMenu = document.querySelector('.logo-menu').addEventListener

}

}
</script>

<template>
  <div class="row nav">

    <div class="col-4 col-md-2">
      <div class="logo">
        <img src="dark-logo.png" alt="">
      </div>
    </div>

    <div class="col-4 col-md-6 offset-md-1">
      <ul class="link" >

        <li v-for="(item, index) in this.nav" :key="index"><a 
          @click="(this.isDdOn = !this.isDdOn) && ( this.indicator = index ) && (this.openLoMenu = false)"
          @blur="this.isDdOn = false" tabindex="0"
          class="normal-link" href="#">
          {{item.name}} <i :class="{'rotate' : this.isDdOn && this.indicator === index }" class="fa-solid fa-chevron-down"></i></a>

          <ul class="np-dropdown" v-show=" this.isDdOn && this.indicator === index ">
            <li v-for="(link, index) in item.links" :key="index"><a href="#">{{link}}</a></li>
          </ul>
          
        </li>

        <li class="logo-menu"><img  tabindex="0"
          @click="(this.openLoMenu = !this.openLoMenu) && (this.isDdOn = false)" 
        @blur="(this.openLoMenu = false) && (this.isDdOn = false)"
          src="shape-logo.png" alt="">
          
          <ul v-show="this.openLoMenu" class="np-dropdown">
            <li v-for="(item, index) in this.nav" :key="index"><a href="#">{{item.name}}</a></li>
          </ul>

        </li>

      </ul>
    </div>

    <div class="col-4 col-md-2 offset-lg-1">
      <ul class="social">
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.nav{
  padding: 25px 45px;
  .logo{
  width: 157px;
  }

  .link{
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 50px;
    li{
      position: relative;
        top: 0;
      .normal-link{
        color: #3f3a64;
        font-size: 1em;
        display: flex;
        align-items: center;
        gap: 8px;
        
        &:hover::after{
          opacity: 1;
        }

        &::after{
          content: '';
          position: absolute;
          bottom: -10px;
          width: 100%;
          height: 2px;
          background-color: #3f3a64;
          border-radius: 20px;
          opacity: 0;
          transition: all .5s linear;
        }
        i{
          font-size: .5em;
          padding-top: 4px  ;
          display: block;
          &.rotate{
            transform: rotate(180deg);
          }
        }
      } 
    }
  }

  .social{
    display: flex;
    gap: 27px;
    li{
      a{
        color: #333333;
        display: block;
        transition: all .3s linear;
        font-size: 1.1em;
        &:hover{
          color: black;
          transform: scale(1.2);
        }
      }
    }
  }
}

.logo-menu{
  cursor: pointer;
  position: relative;
  top: 0;
  img{
    width: 20px;
  }
}

.np-dropdown{
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translate(-50%);
  width: 90px;
  padding: 10px 5px;
  background-color: rgba($color: #3f3a64, $alpha: .7);
  border-radius: 20px;
  text-align: center;
  transition: all .5s linear;

  a{
    font-size: .9em;
    line-height: 30px;
    color: #f7f7fd ;
    &:hover{
      color: white;
      text-decoration: underline;
    }
  }
}

.logo-menu{
   cursor: pointer ;
  display: none;
   &:hover img{
    transition: all .3s;
    transform: scale(1.2);
   }

   li{
    display: none;
   }
}

@media only screen and (max-width: 1200px) {
  .link li:nth-child(6) {
    display: none;
  }

  .link li:last-child{
    display: block;

    &li:first-of-type{
      display: block;
    }
  }
}

@media only screen and (max-width: 1050px) {
  .link li:nth-child(5) {
    display: none;
  }

  .link li:nth-child(4) {
    display: none;
  }


  .link li:last-child{

    & li:nth-of-type(5){
      display: block;
    }

    & li:nth-of-type(4){
      display: block;
    }
  }
}

@media only screen and (max-width: 850px) {
  .link li:nth-child(3) {
    display: none;
  }

  .link li:nth-child(2) {
    display: none;
  }


  .link li:last-child{

    & li:nth-of-type(3){
      display: block;
    }

    & li:nth-of-type(2){
      display: block;
    }
  }
}

@media only screen and (max-width: 550px) {
  .link li:first-child {
    display: none;
  }



  .link li:last-child{

    & li:nth-of-type(1){
      display: block;
    }
  }
}




</style>