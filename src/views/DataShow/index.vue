<template>
  <div class="data-show-container">
    <el-row class="data-show-content">
      <el-col :span="6"> </el-col>
      <el-col id="data-show-map" :span="18"> </el-col>
    </el-row>

    <el-row class="data-show-footer"> footer </el-row>
  </div>
</template>

<script>
import { DataShowMap } from "../../utils/map";
export default {
  name: "index",
  methods: {
    mapInit() {
      this.mapObj = new DataShowMap("data-show-map");
    },
  },
  mounted() {
    this.mapInit();
  },
  beforeDestroy() {    
    this.mapObj && this.mapObj.destroy();
  },
};
</script>

<style scoped>
.data-show-container {
  height: 100%;
  width: 100%;
}

.data-show-content > div,
.data-show-footer > div {
  height: 100%;
}

.data-show-content {
  height: 85%;
}

.data-show-footer {
  background-color: rgb(46, 43, 226);
  height: 15%;
}
</style>