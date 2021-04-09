<template>

  <div id="app">
    <el-container id="mainContainer">
      <router-view></router-view>
    </el-container>
  </div>


</template>

<script>





  export default {
    name: 'App',
    data(){
      return{
        NavMenuState:''
      }
    },
    components: {
    },
    methods:{
      //获取NavMenu的key
      GetNavMenuKey:function (key) {
        this.NavMenuState=key
      },

      //路由判断


    }



  }
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}

  #mainContainer{
    position:relative;
    z-index:9999;
  }

</style>
