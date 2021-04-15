<template>

  <div class="container">

    <header id="header-panel">
      <h3 class="header-title">浙江省生态文明建设年度评价专题展示系统
      </h3>
    </header>

    <div id="content-panel">

      <div class="card-panel row11">
        <div class="card">
        </div>
      </div>

      <div class="card-panel row12">
        <div class="multi-bar card ">
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">资源利用指数</h4></div>
            <div id="bar-item1" class="bar-item bar-item1"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">环境治理指数</h4></div>
            <div id="bar-item2" class="bar-item bar-item2"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">环境质量指数</h4></div>
            <div id="bar-item3" class="bar-item bar-item3"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">生态保护指数</h4></div>
            <div id="bar-item4" class="bar-item bar-item4"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">增长质量指数</h4></div>
            <div id="bar-item5" class="bar-item bar-item5"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">绿色生活指数</h4></div>
            <div id="bar-item6" class="bar-item bar-item6"></div>

          </div>
        </div>
      </div>

      <div class="card-panel row21">
        <div class="card">
          <div class="chart-panel ">
            <div class="chart-header">
              <h4 class="chart-title">绿色发展指数</h4>
            </div>
            <div class="chart-area" id="greenDevelop"></div>
          </div>
        </div>
      </div>

      <div class="card-panel row22">
        <div class="multi-pie card">
          <div class="multiPie-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">TOP5城市</h4></div>
            <div id="pie-item" class="pie-item pie-item1"></div>
          </div>
        </div>
      </div>

      <!--      <div id="flexCon">-->

  <!--      first row-->
<!--          <div  class="row11">-->
<!--            <div class="chart-wrapper">-->
<!--              <div class="chart-div">-->
<!--                <h3 class="chart-title">这里是地图</h3>-->
<!--                <div class="chart-loader">-->
<!--                  <div class="loader">-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex-cell flex-cell-c">-->
<!--            <div class="chart-wrapper">-->
<!--              <h3 class="chart-title"></h3>-->
<!--              <div class="chart-div"></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex-cell flex-cell-r">-->
<!--            <div class="chart-wrapper">-->
<!--              <h3 class="chart-title"></h3>-->
<!--              <div class="chart-div chart-done">-->
<!--                <div class="chart-loader"><div class="loader"></div></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
  <!--      second row-->
<!--        <div class="flex-row">-->
<!--          <div class="flex-cell flex-cell-lc">-->
<!--            <div class="chart-wrapper">-->
<!--              <h3 class="chart-title"></h3>-->
<!--              <div class="chart-div chart-done">-->
<!--                <div class="chart-loader"><div class="loader"></div></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex-cell flex-cell-r">-->
<!--            <div class="chart-wrapper">-->
<!--              <h3 class="chart-title"></h3>-->
<!--              <div class="chart-div chart-done">-->
<!--                <div class="chart-loader"><div class="loader"></div></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </div>

<!--  </div>-->

</template>

<script src="../EvaluateTheme/js/themeGlobel.js">
import themeGlobel from "@/views/EvaluateTheme/js/themeGlobel";
export default {
  name: "index",
  themeGlobel
}



</script>

<style scoped>
@import "css/themeGlobel.css";











</style>