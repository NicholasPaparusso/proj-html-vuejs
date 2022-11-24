<script>
export default {
name : 'AppHeader',

data(){
  return{
    nav : [
      {
        name: 'Home',
        links: ['lorem','lorem','lorem','lorem','lorem','lorem',]
      },

      {
        name: 'Pages',
        links: ['lorem','lorem','lorem']
      },

      {
        name: 'Courses',
        links: ['lorem','lorem','lorem','lorem']
      },
      {
        name: 'Features',
        links: ['lorem','lorem']
      },
      {
        name: 'Blog',
        links: ['lorem','lorem','lorem']
      },
      {
        name: 'Shop',
        links: ['lorem','lorem','lorem''lorem']
      },
     
    ],
  }
}

}
</script>

<template>
  <div class="row nav">

    <div class="col-2">
      <div class="logo">
        <img src="dark-logo.png" alt="">
      </div>
    </div>

    <div class="col-6 offset-1">
      <ul class="link" >

        <li v-for="(link, index) in this.nav" :key="index"><a href="#">
          {{link.name}} <i class="fa-solid fa-chevron-down"></i></a>
          <div class="dropdown"></div>
        </li>

        <li class="logo-menu"><img src="shape-logo.png" alt=""></li>

      </ul>
    </div>

    <div class="col-2 offset-1">
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
      a{
        color: #3f3a64;
        font-size: 1em;
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
        top: 0;
        
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

</style>