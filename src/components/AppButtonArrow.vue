<script>
export default {
name : 'AppButtonArrow',

props:{
  text: String,
},
}
</script>

<template>
  <button class="btn np-button">{{text}}<i class="fa-solid fa-arrow-right"></i></button>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-button{
      width: 250px;
      min-height: 55px;
      background-color: $primary;
      color: #fff;
      font-weight: 700;
      font-size: .8em;
      transition: all .5s;

      i{
        margin-left: 15px;
      }

      &:hover{
        background-color: $secondary;
        color: #fff;
      }
    }

</style>