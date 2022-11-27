<script>
import AppJumbo from './components/AppJumbo.vue';
import AppWidget from './components/AppWidget.vue';
import AppStats from './components/AppStats.vue';
import AppFooter from './components/AppFooter.vue';
import AppAboutMe from './components/AppAboutMe.vue';
import AppCourse from './components/AppCourse.vue'
export default {

components:{
AppJumbo,
AppWidget,
AppStats,
AppAboutMe,
AppCourse,
AppFooter
},

}
</script>

<template>
  <AppJumbo/>
  <AppWidget/>
  <AppStats/>
  <AppAboutMe/>
  <AppCourse/>

  <AppFooter/>
</template>

<style lang="scss">
@import './style/general.scss' ;

</style>