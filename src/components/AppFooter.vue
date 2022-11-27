<script>
import AppSocialNav from './AppSocialNav.vue';

export default {
name : 'AppFooter',
components:{
  AppSocialNav
},

}
</script>

<template>

  <footer>
    <div class="container-fluid container-xl np-container">

<div class="row">

  <div class="col-xl-5 d-flex flex-column pb-3 pb-xl-0">
    <h5>Address</h5>
    <span>382 NE 191st St # 87394 Miami, Fl 33179-33899 </span>
    <span>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</span>
    <span><a href="#">Support@maxcoach.com</a></span>
    
    <ul class="social">
      <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
    </ul>

  </div>

  <div class="col-12 col-sm-6 col-xl-3 offset-xl-1 d-flex flex-column">
    <h5>Explore</h5>

    <div class="row">

      <div class="col">
      <ul>
        <li><a href="#">Start here</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </div>

    <div class="col">
      <ul>
        <li><a href="#">Succes story</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>

    </div>
  </div>



  <div class="col-12 col-sm-6 col-xl-3 d-flex flex-column">
    <h5>Information</h5>
    <ul>
      <li><a href="#">Membership</a></li>
      <li><a href="#">Purchase guide</a></li>
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Tems of service</a></li>
    </ul>
  </div>

</div>

<div class="row d-flex justify-content-center">
  <div class="col text-center">
    <span >&copy; 2020 Maxcoach. All Rights Reserved</span>
  </div>
</div>

</div>
  </footer>
 
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

 footer{
    background-color: #171621; 
    .np-container{
      padding-top: 70px;
      padding-bottom: 70px;

      ul{
        padding: 0;

        li{
          margin-top: 12px;
        }
      }

      span{
        color: #ababab;
        font-size: 14px;
        margin-top: 12px;
        font-weight: 600;
      }

      a{
        color: #ababab;
        font-size: 14px;
        font-weight: 700;
        margin-top: 12px;

        &:hover{
          color: $primary;
        }
      }

      h5{
        color: white;
        font-size:18px;
        font-weight: bold;
      }

      .row:first-of-type{
        padding-bottom: 50px;
      }
    }
  }

  .social{
    display: flex;
    gap: 27px;
    li{
      a{
        display: block;
        transition: all .3s linear;
        font-size: 1.5em;
        &:hover{
          color: white;
          transform: scale(1.2);
        }
      }
    }
  }

</style>
