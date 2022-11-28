<script>
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default {
name : 'AppWidget',

components:{
VueCustomTooltip,
}
}
</script>

<template>
  <div class="widget d-flex flex-column align-items-center">
   
    <a href="#">
      <vue-custom-tooltip class="tip" label="Select Demo" position="is-left" ><i class="fa-solid fa-ruler-combined"></i></vue-custom-tooltip>
    </a>

    <a href="#"> 
      <vue-custom-tooltip label="Support Channel" position="is-left" ><i class="fa-solid fa-life-ring"></i></vue-custom-tooltip>
    </a>

    <a href="#">
      <vue-custom-tooltip label="Documentation" position="is-left" > <i class="fa-solid fa-book"></i></vue-custom-tooltip>
    </a>

    <a href="#">
      <vue-custom-tooltip label="Purchase Maxcoach" position="is-left" ><i class="fa-solid fa-cart-shopping"></i></vue-custom-tooltip>
    </a>
    
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