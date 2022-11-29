<script>
export default {
name : 'AppStats',
}
</script>

<template>
  
  <div class="container np-container">

    <div class="row">

      <div class="col-6 col-md-3 np-col">
        <h2>1.926</h2>
        <h5>FINISHED SESSIONS</h5>
      </div>


      <div class="col-6 col-md-3 np-col">
        <h2>100%</h2>
        <h5>SATISFACTION RATE</h5>
      </div>

      <div class="col-6 col-md-3 np-col">
        <h2>3092+</h2>
        <h5>ENROLLED LEARNERS</h5>
      </div>

      <div class="col-6 col-md-3 np-col">
        <h2>200</h2>
        <h5>ONLINE INSTRUCTORS</h5>
      </div>

    </div>

  </div>

</template>


<style lang="scss" scoped>
@import '../style/partials/var' ;
  .np-container{
    padding-top: 120px;
    padding-bottom: 120px;

    .row{

      .np-col{
        position: relative;
        top: 0;
        &:before{
          content: '';
          position: absolute;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-image: url('../assets/img/background-pattern-grid-line-06.png');
          background-repeat: no-repeat;
        }
      }
  
      .np-col:last-of-type{
        
        &::after{
          content: '';
          position: absolute;
          left:100%;
          top: 0;
          display: block;
          height: 100%;
          width: 100%;
          background-image: url('../assets/img/background-pattern-grid-line-06.png');
        }
      }
    }

    h2{
      color: $primary;
      font-size: 40px;
      font-weight: 500;
      font-family: "Red Hat Display", sans-serif;
      text-align: center;
    }

    h5{
      padding: 15px 0 ;
      text-align: center;
      font-size: 15px;
      font-weight: 500;
    }
  }
</style>