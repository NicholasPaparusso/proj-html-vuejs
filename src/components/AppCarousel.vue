<template>
  <swiper
    :slidesPerView="6"
    :spaceBetween="100"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="false"
    :navigation="false"
    :modules="modules"
    class="mySwiper d-none d-lg-block"
  >
  <swiper-slide>
    <img src="../assets/img/client-logo-01-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-02-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-03-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-04-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-05-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-06-primary.png" alt="stylus">
  </swiper-slide>

  
  <swiper-slide>
    <img src="../assets/img/client-logo-07-primary.png" alt="stylus">
  </swiper-slide>

  </swiper>

  <swiper
    :slidesPerView="3"
    :spaceBetween="100"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="false"
    :navigation="false"
    :modules="modules"
    class="mySwiper np-swiper d-none d-md-block  d-lg-none"
  >
  <swiper-slide>
    <img src="../assets/img/client-logo-01-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-02-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-03-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-04-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-05-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-06-primary.png" alt="stylus">
  </swiper-slide>

  
  <swiper-slide>
    <img src="../assets/img/client-logo-07-primary.png" alt="stylus">
  </swiper-slide>

  </swiper>

  <swiper
    :slidesPerView="2"
    :spaceBetween="100"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :pagination="false"
    :navigation="false"
    :modules="modules"
    class="mySwiper np-swiper d-md-none"
  >
  <swiper-slide>
    <img src="../assets/img/client-logo-01-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-02-primary.png" alt="stylus">
  </swiper-slide>

  <swiper-slide>
    <img src="../assets/img/client-logo-03-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-04-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-05-primary.png" alt="stylus">
  </swiper-slide>
  
  <swiper-slide>
    <img src="../assets/img/client-logo-06-primary.png" alt="stylus">
  </swiper-slide>

  
  <swiper-slide>
    <img src="../assets/img/client-logo-07-primary.png" alt="stylus">
  </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: 'AppCarousel',
  components: {
    Swiper,
    SwiperSlide,
  },


  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped lang="scss">
  img{
    cursor: grab;
    width: 100%;
    height: 100px;
    min-width: 120px;
    object-fit: contain;
    filter: brightness(.6) opacity(.2);

    &:hover{
      filter: unset
    }
  }

  .np-swiper{
    img{
      width: 150px;
    }
    
  }
</style>