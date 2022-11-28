<script>
export default {
name : 'AppBookHover',
}
</script>

<template>
  <div class="widget d-flex flex-column">
    
    <div>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <div>
      <i class="fa-solid fa-cart-shopping"></i>
    </div>

    <div>
      <i class="fa-regular fa-heart"></i>
    </div>

    <div>
      <i class="fa-solid fa-signal"></i>
    </div>

  </div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.widget{

  div{
    padding: 5px 0;

    &:hover i{
      background-color: $primary;
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