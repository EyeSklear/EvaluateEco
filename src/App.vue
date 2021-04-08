<template>
  <div id="app">
    <el-container >
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
  #app {

  }
</style>
