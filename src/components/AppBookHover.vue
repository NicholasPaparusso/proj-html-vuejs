<script>
export default {
name : 'AppBookHover',
}
</script>

<template>
  <div class="widget d-flex flex-column">
    
    <a href="#">
      <vue-custom-tooltip label="Quick view" position="is-left"><i class="fa-solid fa-magnifying-glass"></i></vue-custom-tooltip> 
    </a>

    <a href="#">
      <vue-custom-tooltip label="Add to cart" position="is-left"><i class="fa-solid fa-cart-shopping"></i></vue-custom-tooltip>
    </a>

    <a href="#">
      <vue-custom-tooltip label="Add to wishlist" position="is-left"><i class="fa-regular fa-heart"></i></vue-custom-tooltip>
    </a>

    <a href="#">
      <vue-custom-tooltip label="Compare" position="is-left"><i class="fa-solid fa-signal"></i></vue-custom-tooltip>
    </a>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.widget{

  a{
    padding: 5px 0;

    &:hover i{
      background-color: $primary;
      color: #fff;
    }
    i{
      font-size: 13px;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255) ;
      width: 40px;
      height: 40px;

    }
 
  }
}

</style>