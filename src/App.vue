<template>
  <div id="app">
    <el-container >

      <el-row class="tac">
        <el-col :span="25">
          <!--子组件向父组件传值-->
          <NavMenu v-on:GetKey="GetNavMenuKey" style="height: 900px"></NavMenu>
        </el-col>
      </el-row>
      <router-view></router-view>
    </el-container>


  </div>
</template>

<script>


  import NavMenu from './components/NavMenu';

  export default {
    name: 'App',
    data(){
      return{
        NavMenuState:''
      }
    },
    components: {
      NavMenu,


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
