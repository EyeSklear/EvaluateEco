<template>
    <el-menu
      router='true'
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>可持续发展计算平台</span>
        </template>
        <el-menu-item-group>
          <template slot="title" >用户登录</template>
          <el-menu-item index="1-1">登录</el-menu-item>
          <el-menu-item index="1-2">注销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/GetData">
        <i class="el-icon-menu"></i>
        <span slot="title">数据查询</span>
      </el-menu-item>
      <el-menu-item index="/map" >
        <i class="el-icon-document"></i>
        <span slot="title">地图可视化</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">模型计算</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name:'NavMenu',

        data(){
            return{
                state1:1,
            }
        },
        methods: {
            handleSelect(key){
               this.state1=key;
               this.$emit('GetKey',key)
            }



        }
    }
</script>
