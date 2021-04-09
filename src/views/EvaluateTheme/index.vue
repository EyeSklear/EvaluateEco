<template>





    <div id="container">
      <vue-particle-line  id="vueParticle">
      <div id="header-panel">
        <p>政府生态文明考核评估专题展示系统</p>
      </div>
      <div id="content-panel">
      </div>
      </vue-particle-line>
    </div>


</template>

<script>
import Vue from 'vue'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
Vue.use(vueParticleLine)

    export default {
        name: "index",
        // components: {
        //   vueParticleLine
        // },
    }
</script>

<style scoped>


#vueParticle{
  height: 100%;
  position:absolute;
  z-index:1;
  size: 10px;
}
#container{

  /*display: grid;*/
  width: 100%;
  height: 100%;
  /*grid-template-columns: 100%;*/
  /*grid-template-rows: 6.83% 1fr;*/
  /*z-index: 99;*/
}
#content-panel{
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(24, 4.16%);
  grid-template-rows: repeat(8, 12.5%);
  z-index: 100;
  padding: 3px;
}





</style>