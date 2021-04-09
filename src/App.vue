<template>
  <!-- <div id="app"> -->
    <el-container id="app">
      <router-view></router-view>
    </el-container>
  <!-- </div> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      NavMenuState: "",
    };
  },
  components: {},
  methods: {
    //获取NavMenu的key
    GetNavMenuKey: function (key) {
      this.NavMenuState = key;
    },

    //路由判断
  },
};
</script>

<style>
html,
body,
#app{
  margin: 0;
  height: 100%;
  width: 100%;
}

</style>
