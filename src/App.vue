<script>
import AppJumbo from './components/AppJumbo.vue';
import AppWidget from './components/AppWidget.vue';
import AppStats from './components/AppStats.vue';
import AppFooter from './components/AppFooter.vue';
import AppAboutMe from './components/AppAboutMe.vue';
import AppCourse from './components/AppCourse.vue'
import AppBookStore from './components/AppBookStore.vue';
import AppPartner from './components/AppPartner.vue';
import AppStories from './components/AppStories.vue';
export default {

components:{
AppJumbo,
AppWidget,
AppStats,
AppAboutMe,
AppCourse,
AppBookStore,
AppFooter,
AppPartner,
AppStories,
},

}
</script>

<template>
  <AppJumbo/>
  <AppWidget/>
  <AppStats/>
  <AppAboutMe/>
  <AppCourse/>
  <AppBookStore/>
  <AppPartner/>
  <AppStories/>
  <AppFooter/>
</template>

<style lang="scss">
@import './style/general.scss' ;

</style>