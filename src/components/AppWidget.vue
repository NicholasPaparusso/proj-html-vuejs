<script>
export default {
name : 'AppWidget',



}
</script>

<template>
  <div class="widget d-flex flex-column align-items-center">
   
    <a> <i class="fa-solid fa-ruler-combined"></i><v-tooltip transition="slide-x-transition" activator="parent" location="start"  origin="end center" >Select Demo</v-tooltip></a>
    <a> <i class="fa-solid fa-life-ring"></i> <v-tooltip transition="slide-x-transition" activator="parent" location="start"  origin="end center">Support Channel</v-tooltip> </a>
    <a> <i class="fa-solid fa-book"></i> <v-tooltip transition="slide-x-transition" activator="parent" location="start"  origin="end center">Documentation</v-tooltip> </a>
    <a> <i class="fa-solid fa-cart-shopping"> </i><v-tooltip transition="slide-x-transition"  activator="parent" location="start"  origin="end center">Purchase Maxcoach</v-tooltip> </a>
  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;
  .widget{
    width: 40px;
    position: fixed;
    top: 250px;
    right: 0%;
    background-color: white;
    z-index: 3;
    font-size: 16px;
    row-gap: 25px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: -2px 0 10px -2px  rgba($color: #000000, $alpha: .2);
      i{
        cursor: pointer;
      }   
  }

</style>