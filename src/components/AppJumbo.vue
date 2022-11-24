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
  <div class="np-container">

   <div class="container-fluid container-xl">

    <AppHeader/>

    <div class="row jumbo-container">

      <!-- <div class="col-5">
        <h5>I'M WINGMAN</h5>
        <h1>Peace On Earth A Wonderful wish But no way</h1>
        <p>Success isn't overnight. </p>
        <button class="btn btn-success">Get</button>
      </div> -->

      <div class="col-7"></div>

    </div>

   </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{
  padding: 25px 45px;
  height: 800px;
  width: 100%;
  background-image: url('../assets/img/background-pattern-wavify.png');
  background-color: #f7f7fd ;
}

</style>