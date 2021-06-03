<template>
    <el-container style="width: 100%;height: 100%">
        <el-main style="width: 100%;height: 100%;background-color: #ffffff">
                <el-col :offset="1" class="SystemPageCol">
                    <el-card shadow="hover" style="height: 80%;width: 90%">

                    </el-card>
                </el-col>
                <el-col  class="SystemPageCol">
                    <el-card shadow="hover" style="height: 80%;width: 90%">

                    </el-card>
                </el-col>
                <el-col class="SystemPageCol">
                    <el-card shadow="hover" style="height: 80%;width: 90%">

                    </el-card>
                </el-col>
        </el-main>
    </el-container>
</template>

<script>


    export default {
        name: "SystemIntroduce",
    }
</script>



<style scoped>
   .SystemPageCol{
       width:30%;
       height:100%;
       padding-top:80px;
       padding-left:30px;

   }
</style>