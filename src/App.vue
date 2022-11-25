<script>
import AppJumbo from './components/AppJumbo.vue';
import AppWidget from './components/AppWidget.vue';
import AppStats from './components/AppStats.vue';
export default {

components:{
AppJumbo,
AppWidget,
AppStats,
},

}
</script>

<template>
  <AppJumbo/>
  <AppWidget/>
  <AppStats/>
</template>

<style lang="scss">
@import './style/general.scss' ;

</style>