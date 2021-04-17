<template>
    <div class="parent2">

        <el-table class="tableStyle"
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%;">
            <el-table-column 
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="目标">
            </el-table-column>
            <el-table-column
                    prop="amount1"
                    label="具体目标">
            </el-table-column>
            <el-table-column
                    prop="amount2"
                    label="具体指标">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "AnalyzePage"
    }
</script>

<style scoped>
.tableStyle{
    grid-area:1/1/5/8;
    background-color: hsla(0, 0%, 100%, 0.6);
}

</style>