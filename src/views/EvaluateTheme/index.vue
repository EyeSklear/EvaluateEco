<template>

<!--    <div class="container">-->
<!--      <div class="header-panel">-->
<!--        <h3 class="header-title">-->
<!--          政府生态文明考核评估专题展示系统-->
<!--        </h3>-->
<!--      </div>-->
<!--      <vue-particle-line-->
<!--          class="vueParticle"-->
<!--          :hoverEffect="false"-->
<!--      >-->
<!--      <div class="content-panel">-->
<!--        <p>content</p>-->
<!--        <p>content</p>-->
<!--        <p>content</p>-->
<!--        <p>content</p>-->
<!--      </div>-->
<!--      </vue-particle-line>-->

<!--    </div>-->
  <div class="container">

  <header id="header-panel">
    <h3 class="header-title">浙江省生态文明建设年度评价专题展示系统
    </h3>
  </header>

  <div id="content-panel">
    <div id="flexCon">
      <div class="flex-row">
        <div class="flex-cell flex-cell-l">
          <div class="chart-wrapper">
            <h3 class="chart-title">图表</h3>
            <div class="chart-div">
              <div class="chart-loader"><div class="loader"></div></div>
            </div>
          </div>
        </div>
        <div class="flex-cell flex-cell-c">
          <div class="chart-wrapper">
            <h3 class="chart-title"></h3>
            <div class="chart-div"></div>
          </div>
        </div>
        <div class="flex-cell flex-cell-r">
          <div class="chart-wrapper">
            <h3 class="chart-title"></h3>
            <div class="chart-div chart-done">
              <div class="chart-loader"><div class="loader"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row">
        <div class="flex-cell flex-cell-lc">
          <div class="chart-wrapper">
            <h3 class="chart-title"></h3>
            <div class="chart-div chart-done">
              <div class="chart-loader"><div class="loader"></div></div>
            </div>
          </div>
        </div>
        <div class="flex-cell flex-cell-r">
          <div class="chart-wrapper">
            <h3 class="chart-title"></h3>
            <div class="chart-div chart-done">
              <div class="chart-loader"><div class="loader"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>

    export default {
        name: "index",

    }
</script>

<style scoped>

/*global*/

* {margin:0;padding:0;box-sizing:border-box;}

 .container{
   position:relative;
   background:#050d3c url("./img/bg.png") 0 0/ 100% 100% no-repeat;
   width: 100%;
   height: 100%;
   width:100%;
   height:100%;
   min-width:1200px;
   min-height:600px;
   overflow:hidden;
   /*font-family:"Microsoft Yahei", Arial, sans-serif;*/
   /*position: absolute;*/
   /*/*display: grid;*/
   /*height: 100%;*/
   /*/*grid-template-columns: 100%;*/
   /*/*grid-template-rows: 20%;*/
   /*z-index: 99;*/
 }


/* layout */

/*title*/
#header-panel {
    position: relative;
    height:72px;
    background-image:url("./img/header.png");
    background-position: center top;
    background-size: 110% 100%;
    background-repeat: no-repeat;
    overflow:hidden;
}
 /*.header-panel{*/
 /*  margin: 0;*/
 /*  display: grid;*/
 /*  !*height:auto!important;*!*/
 /*  !*grid-template-columns: 100%;*!*/
 /*  background-image: url("./images/header.png");*/
 /*  background-size: 120% 90%;*/
 /*  background-repeat: no-repeat;*/
 /*  background-position: center top;*/
 /*}*/

.header-title {
  line-height:64px;
  text-align:center;
  font-size: 25px;
  font-weight: 350;
  color:#bef2ff;
  /*position: relative;*/
  /*top: 5%;*/
  /*letter-spacing: 0.3px;*/
  /*margin-bottom: 2%;*/
}
 /*.header-title{*/
 /*  letter-spacing: 0.3px;*/
 /*  position: relative;*/
 /*  bottom: 10%;*/
 /*  text-align: center;*/
 /*  font-weight: 600;*/
 /*  color: dodgerblue;*/
 /*}*/


/*content*/
#content-panel {
  position:absolute;
  top:64px;
  bottom:15px;
  left:0;
  right:0;
}
#flexCon {
  height:100%;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
}
.flex-row {
  -webkit-flex:1;
  -ms-flex:1;
  flex:1;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
}
.flex-cell {-webkit-flex:1;-ms-flex:1;flex:1;padding:15px;}
.flex-cell-l,
.flex-cell-r {-webkit-flex:2;-ms-flex:2;flex:2;}
.flex-cell-c {-webkit-flex:3;-ms-flex:3;flex:3;}
.flex-cell-lc {-webkit-flex:5;-ms-flex:5;flex:5;}

.chart-wrapper {position:relative;height:100%;}
.chart-title {height:30px;font-size:20px;font-weight:normal;color:#5ac8fa;}
.chart-div {
  position:absolute;
  top:30px;
  bottom:0;
  left:0;
  right:0;
  border-style:solid;
  border-width:26px 27px 27px;
  border-image:url("./img/chart-wrapper.png") 26 27 27 fill / 1 / 0 repeat;
}

/* media query */
@media (max-width:1900px) {
  #header-panel {height:48px;}
  #content-panel {top:36px;bottom:10px;}
  .header-title {line-height:42px;font-size:20px;}
  .flex-cell {padding:10px;}
  .chart-title {height:24px;font-size:16px;}
  .chart-div {top:24px;}
}

/* chart-loader */
.chart-loader {
  position:absolute;
  top:0;
  left:0;
  z-index:99;
  width:100%;
  height:100%;
  background:rgba(255, 255, 255, 0);
  transition:all .8s;
}
.chart-loader .loader {
  position:absolute;
  left:50%;
  top:50%;
  width:60px;
  height:60px;
  margin:-30px 0 0 -30px;
  border:3px solid transparent;
  border-top-color:#3498db;
  border-radius:50% !important;
  -webkit-animation:spin 2s linear infinite;
  animation:spin 2s linear infinite;
}
.chart-loader .loader:before {
  content:"";
  position:absolute;
  top:3px;
  left:5px;
  right:5px;
  bottom:5px;
  border:3px solid transparent;
  border-top-color:#e74c3c;
  border-radius:50% !important;
  -webkit-animation:spin 3s linear infinite;
  animation:spin 3s linear infinite;
}
.chart-loader .loader:after {
  content:"";
  position:absolute;
  top:9px;
  left:10px;
  right:10px;
  bottom:10px;
  border:3px solid transparent;
  border-top-color:#f9c922;
  border-radius:50% !important;
  -webkit-animation:spin 1.5s linear infinite;
  animation:spin 1.5s linear infinite;
}
.chart-done .chart-loader {display:none;}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

/*.vueParticle{*/
/*  position:absolute;*/
/*  z-index:-99;*/
/*}*/



/*.content-panel{*/
/*  !*width: 100%;*!*/
/*  height: 95%;*/
/*  display: grid;*/
/*  grid-template-columns: repeat(24, 4.16%);*/
/*  grid-template-rows: repeat(8, 12.5%);*/
/*  !*z-index: 100;*!*/
/*}*/






</style>