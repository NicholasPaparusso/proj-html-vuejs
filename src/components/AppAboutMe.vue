<script>
export default {
name : 'AppAboutMe',
}
</script>

<template>

  <div class="container-fluid container-xl np-container">

    <div class="row">

      <div class="col-10 col-xl-5">
        <h6>ABOUT ME</h6>
        <h2>How to Be an Alpha Male: The 15 Habits of True Alphas</h2>
      </div>

      <div class="col-xl-6 pt-4 offset-xl-1 pt-xl-0">
        <p>Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man you’ve always wanted to be?</p>
        <p>
          Your goal is to show the consistency of business, core values, and customer care. Punctuality, responsibility, individuality, accuracy, enthusiasm &#45; you have to clearly explain how these qualities are applicable to your work. And the important thing is you do love what you do.
        </p>
      </div>

    </div>

    <div class="row">

      <div class="col-xl-7 yt">
        <img src="../assets/img/home-movation-video-poster-670x450.jpg" alt="testimonial">
        <img src="../assets/img/icon-youtube-play.png" alt="youtube-btn">
      </div>

      <div class="col-6 col-xl-3 offset-xl-1 ">
        <p>
          "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."
        </p>
        <div class="logo">
          <img src="shape-logo.png" alt="wave-logo">
        </div>
        <h5>Kaixa Stark</h5>
        <span>WINGMAN</span>
      </div>

    </div>

  </div>

</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;

.np-container{

.row:first-of-type{

  display: flex;
  align-items: center;
  padding-bottom: 100px;
  h2{
    font-size: 40px;
    line-height: 60px;
    font-weight: 400;
    padding-top: 15px;
    padding-right: 30px;
    color: $text-heading;
  }

  

  span, h6{
    color: $primary;
  }

  p:first-of-type{
    color: $text-heading;
    font-size: 18px;
    font-weight: 500;
  }

  p:last-of-type{
    font-size: 15px;
    font-weight: 500;
    color: lighten($text, $amount: 10);
    text-align: justify;
  }

}

.row:nth-of-type(2){
  display: flex;
  align-items: center;
  padding-bottom: 100px;

p{
  font-size: 24px;
  font-family: "Playfair Display", serif;
  color: $text-heading;
  line-height: 45px;
  padding-bottom: 30px;
}

.yt{
  padding: 0;
  position: relative;
  top: 0;
  width: 670px;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  background-color: green;

  &:hover img:first-of-type{
    filter: brightness(1.05);
    transform: scale(1.1);
  }


  img:first-of-type{
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
    transition: all .5s;
  }

  img:last-of-type{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100px
  }
}

.logo{
  width: 30px;
  padding-bottom: 20px;
}

h5{
  color: $secondary;
  font-size: 20px;
  font-weight: 700;
}

span{
  color: lighten($text, $amount: 20);
  font-weight: 700;
  font-size: 12px;
}

}

}

@media only screen and (max-width: 1200px){
  .row:first-of-type{
    padding-bottom: 0px !important ;
  }

  .yt{
      margin: 30px 0;
  }
}

</style>