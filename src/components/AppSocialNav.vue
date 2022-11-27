<script>
export default {
name : 'AppSocial',
}
</script>

<template>
  <ul class="social">
    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
  </ul>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.social{
    display: flex;
    gap: 27px;
    li{
      a{
        color: $text-heading;
        display: block;
        transition: all .3s linear;
        font-size: 1.1em;
        &:hover{
          color: black;
          transform: scale(1.2);
        }
      }
    }
  }

</style>