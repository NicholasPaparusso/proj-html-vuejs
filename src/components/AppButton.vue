<script>
export default {
name : 'AppButton',

props:{
  text: String,
},
}
</script>

<template>
  <button class="btn np-button">{{text}}</button>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-button{
      width: 200px;
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