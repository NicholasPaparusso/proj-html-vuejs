<script>
import AppCarousel from './AppCarousel.vue';
export default {
name : 'AppPartner',
components:{
  AppCarousel
}
}
</script>

<template>
<div class="container-fluid container np-container">
  <AppCarousel/>
</div>
</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{
  padding-bottom: 100px;
}
</style>