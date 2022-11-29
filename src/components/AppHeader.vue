<script>

import AppSocialNav from './AppSocialNav.vue';

export default {
name : 'AppHeader',


components:{
  AppSocialNav,
},

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
}

}
</script>

<template>
  <div class="row nav">

    <div class="col-4 col-md-2">
      <div class="logo">

        <img src="dark-logo.png" alt="MaxCoach">

      </div>
    </div>

    <div class="col-8 col-sm-4 col-md-6 offset-md-1">
      <ul class="link" >
        <!-- Ciclo l'array di oggetti e creo dunque per ogni oggetto dell'array un List Item che conterrà al suo interno un Link e un Dropdown-menu -->
        <li v-for="(item, index) in this.nav" :key="index">
          <!-- Al click del link : 
            1-)Apro o chiudo il Dropdown-menu del link che ho clickato, tramite un toggle di una variabile booleana, precedentemente dichiarata nei data e ad un'altra variabile che eredita lo stesso valore dell'index del link clickato;
            2-)Chiudo eventuali dropdown-menu di altri link precedentemente aperti compreso quello dell'hamburger menu
            3-)Tramite @blur e tabindex="0" chiudo i menu se clicko al di fuori di essi  
          -->
          <a @click="(this.isDdOn = !this.isDdOn) && ( this.indicator = index ) && (this.openLoMenu = false)"
          @blur="this.isDdOn = false" tabindex="0"
          class="normal-link" href="#">

          <!-- Le chevron dei link clickati si girano  -->
          {{item.name}} <i :class="{'rotate' : this.isDdOn && this.indicator === index }" class="fa-solid fa-chevron-down"></i>
          </a>

          <!-- Ciclo l'array contenuto all'interno di ciascun oggetto per ricreare il dropdown -->
          <ul class="np-dropdown" v-show=" this.isDdOn && this.indicator === index ">
            <li v-for="(link, index) in item.links" :key="index"><a href="#">{{link}}</a></li>
          </ul>
          
        </li>

        <li class="logo-menu">
          <!-- Con la stessa logica dei links di prima apro e chiudo il dropdown menu dell'elemento clickato e chiudo eventuali dropdown menu aperti -->
          <img  tabindex="0"
          @click="(this.openLoMenu = !this.openLoMenu) && (this.isDdOn = false)" 
          @blur="(this.openLoMenu = false) && (this.isDdOn = false)"
          src="shape-logo.png" alt="">
          <!-- Ciclo nuovamente l'array di links per inglobarli dentro un singolo Hamburger menu che sarà visibile quando lo schermo si rimpicciolirà -->
          <ul v-show="this.openLoMenu" class="np-dropdown">
            <li v-for="(item, index) in this.nav" :key="index"><a href="#">{{item.name}}</a></li>
          </ul>

        </li>

      </ul>
    </div>

    <div class="col-0 col-sm-4 col-md-2 offset-lg-1 d-flex justify-content-center">

      <!-- Utilizzo un componente per la parte finale dell'header -->
      <AppSocialNav/>

    </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.nav{
  z-index: 2;
  .logo{
  width: 157px;
  }

  .link{
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 35px;
    li{
      position: relative;
        top: 0;
      .normal-link{
        color: $secondary;
        font-size: 16px;
        font-weight: 500;
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
          background-color: $primary;
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
  width: 150px;
  padding: 10px 5px;
  background-color: rgba($color: white, $alpha: .7);
  border-radius: 20px;
  text-align: center;
  transition: all .5s linear;

  &:hover{
    background-color: white;
  }

  a{
    font-size: .9em;
    line-height: 50px;
    color: $primary ;
    &:hover{
      color: black;   
     
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

@media only screen and (max-width: 575px) {
  .link li:first-child {
    display: none;
  }



  .link li:last-child{

    & li:nth-of-type(1){
      display: block;
    }
  }

  .social{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40px;
    position:absolute;
    top: 10px;
    right: 0;
    background-color: white;
    z-index: 3;
    font-size: 16px;
    row-gap: 25px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: -2px 0 10px -2px  rgba($color: #000000, $alpha: .2);

  }
}





</style>