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

   </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{
  height: 800px;
  width: 100%;
  background-image: url('../assets/img/background-pattern-wavify.png');
  background-color: #f7f7fd ;
}

</style>