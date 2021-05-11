<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      NavMenuState: "",
    };
  },
  mounted() {
    document.title = "生态文明建设与评估专题可视化分析系统";
  },

};
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
