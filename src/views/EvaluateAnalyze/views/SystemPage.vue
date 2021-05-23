<template>
    <el-container class="data-show" >
        <el-header>
            <el-menu
                    :default-active="activeIndex"
                    class="data-show-header"
                    mode="horizontal"
                    background-color="#001529"
            >
                <el-row>
                    <el-col :span="2" :offset="1">
                        <a
                                class="header-logo"
                                href="/SdgPlatform"
                                rel="noopener noreferrer"
                        >
                            <div></div>
                        </a>
                    </el-col>

                    <el-col :span="6" :offset="1">
                        <h1 class="data-show-header-banner">生态文明评估分析系统</h1>
                    </el-col>
                </el-row>
            </el-menu>
        </el-header>
        <el-container class="data-show-main">
            <el-aside style="height: 100%;width: 10%;">
                <el-menu class="el-menu-vertical-demo data-show"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router>
                    <el-menu-item index="/SdgPlatform/EvaluateAnalyze/System/Introduce">
                        <i class="el-icon-menu"></i>
                        <span slot="title">
                            操作介绍
                        </span>
                    </el-menu-item>
                    <el-menu-item index="/SdgPlatform/EvaluateAnalyze/System/Map">
                        <i class="el-icon-document"></i>
                        <span slot="title">
                            位置选取
                        </span>
                    </el-menu-item>
                    <el-menu-item index="/SdgPlatform/EvaluateAnalyze/System/Table">
                        <i class="el-icon-setting"></i>
                        <span slot="title">
                            表格自定
                        </span>
                    </el-menu-item>
                    <el-menu-item index="/SdgPlatform/EvaluateAnalyze/System/Visual">
                        <i class="el-icon-picture"></i>
                        <span slot="title">
                            数据展示
                        </span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container style="height: 100%;width: 90%;">
                <router-view></router-view>
            </el-container>
        </el-container>




    </el-container>
</template>

<script>
    export default {
        name: "SystemPage",

        methods: {

        }
    }
</script>

<style scoped>
    .data-show {
        height:100%;
        width: 100%;

    }
    .data-show-main{
        height: 95%;
        width: 100%;
    }


    .data-show-header,
    .data-show-header div,
    .data-show-content > div {
        height: 100%;
    }
    .data-show-header-banner{
        font-size: 2rem;
        margin: 0;
        color: white;
        height: 59px;
        line-height: 59px;
    }

    .header-logo {
        display: block;
        height: 100%;
        background: url("../../../assets/picture/logo.png") no-repeat scroll left center;
        background-size: auto 35px;
    }



    .data-show-footer > span {
        right: 10px;
        position: absolute;
    }
</style>

