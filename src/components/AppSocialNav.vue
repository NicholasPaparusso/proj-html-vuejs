<script>
export default {
name : 'AppSocial',
}
</script>

<template>
  <ul class="social">
    <li><a href="#">
      <vue-custom-tooltip label="Twitter" position="is-bottom"><i class="fa-brands fa-twitter"></i></vue-custom-tooltip>
    </a></li>

    <li><a href="#">
      <vue-custom-tooltip label="Facebook" position="is-bottom"><i class="fa-brands fa-facebook-f"></i></vue-custom-tooltip>      
    </a></li>

    <li><a href="#">
      <vue-custom-tooltip label="Instagram" position="is-bottom"><i class="fa-brands fa-instagram"></i></vue-custom-tooltip>
    </a></li>

    <li><a href="#">
      <vue-custom-tooltip label="Linkedin" position="is-bottom"><i class="fa-brands fa-linkedin"></i></vue-custom-tooltip>
    </a></li>

  </ul>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.social{
    display: flex;
    gap: 27px;
    li{
      i{
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