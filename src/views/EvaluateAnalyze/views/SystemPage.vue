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
        <el-main class="data-show-main">
              <el-row class="data-show-content">
                  <el-col :span="6" :offset="1">
                       <div class="data-show-sider" style="height: 100%;width: 100%">
                           <el-tabs style="height: 100%;width: 100%" >
                               <el-tab-pane label="现有指标体系">
                                   <el-table class="tableStyle data-show-table"
                                             :data="SDGsIndex"
                                             :row-class-name="TableCell"
                                             :span-method="arraySpanMethod"
                                             border
                                             :max-height="tableHeight"
                                             @cell-click="cellClick">
                                       <el-table-column
                                               prop="Target"
                                               label="目标层"
                                       >
                                           <template slot-scope="scope">
                                          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '目标层'">
                                               <el-input v-model="scope.row.Target" maxlength="300" placeholder="请输入目标层" size="mini" @blur="inputBlur"/>
                                          </span>
                                               <span v-else>{{ scope.row.Target}}</span>
                                           </template>
                                       </el-table-column>
                                       <el-table-column
                                               prop="Index"
                                               label="指标层"
                                       >
                                           <template slot-scope="scope">
                                          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '指标层'">
                                               <el-input v-model="scope.row.Index" maxlength="300" placeholder="请输入指标层" size="mini" @blur="inputBlur"/>
                                          </span>
                                               <span v-else>{{ scope.row.Index}}</span>
                                           </template>
                                       </el-table-column>
                                       <el-table-column
                                               prop="Factor"
                                               label="因子层"
                                       >
                                           <template slot-scope="scope">
                                          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '因子层'">
                                               <el-input v-model="scope.row.Factor" maxlength="300" placeholder="请输入因子层" size="mini" @blur="inputBlur"/>
                                          </span>
                                               <span v-else>{{ scope.row.Factor}}</span>
                                           </template>
                                       </el-table-column>
                                       <el-table-column
                                               prop="FactorLayer"
                                               label="因子"
                                       >
                                           <template slot-scope="scope">
                                          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '因子'">
                                               <el-input v-model="scope.row.FactorLayer" maxlength="300" placeholder="请输入因子" size="mini" @blur="inputBlur"/>
                                          </span>
                                               <span v-else>{{ scope.row.FactorLayer}}</span>
                                           </template>
                                       </el-table-column>
                                   </el-table>
                                   <el-row  style="text-align: center;padding: 10px">
                                       <el-button @click=ButtonClick() type="success" icon="el-icon-check" circle ></el-button>
                                       <el-button  type="danger" icon="el-icon-delete" circle></el-button>
                                   </el-row>
                               </el-tab-pane>
                               <el-tab-pane label="自定义指标体系">
                                   <div class="CustomTableBackground">
                                       <h4 style="text-align: center">体系选择</h4>
                                       <el-row style="text-align: center">
                                           <span >一级目标层：</span>
                                           <el-select v-model="OneReturn" placeholder="请选择">
                                               <el-option
                                                       v-for="item in ListOne"
                                                       :key="item.一级目标"
                                                       :label="item.一级目标"
                                                       :value="item.一级目标">
                                               </el-option>
                                           </el-select>
                                       </el-row>
                                       <el-row style="text-align: center;padding: 10px">
                                           <span >二级指标层：</span>
                                           <el-select v-model="TwoReturn" placeholder="请选择">
                                               <el-option
                                                       v-for="item in ListTwo"
                                                       :key="item.二级指数"
                                                       :label="item.二级指数"
                                                       :value="item.二级指数">
                                               </el-option>
                                           </el-select>
                                       </el-row>
                                       <el-row style="text-align: center">
                                           <span >三级因子层：</span>
                                           <el-select v-model="ThreeReturn" placeholder="请选择">
                                               <el-option
                                                       v-for="item in ListThree"
                                                       :key="item.评价因子"
                                                       :label="item.评价因子"
                                                       :value="item.评价因子">
                                               </el-option>
                                           </el-select>
                                       </el-row>
                                       <el-row  style="text-align: center;padding: 10px">
                                           <el-button @click=ButtonClick1() type="success" icon="el-icon-check" circle ></el-button>
                                           <el-button @click=deleteClick1() type="danger" icon="el-icon-delete" circle></el-button>
                                       </el-row>
                                       <el-row>
                                           <h4 style="text-align: center">指标体系</h4>
                                           <el-table class="tableStyle data-show-table"
                                                     :data="CustomDataTables"
                                                     :span-method="arraySpanMethod2"
                                                     :row-class-name="TableCell"
                                                     border
                                                     :max-height="tableHeight2"
                                                     @cell-click="cellClick">
                                                     <el-table-column
                                                       prop="Target"
                                                       label="目标层"
                                                     >
                                                    <template slot-scope="scope">
                                                        <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '目标层'">
                                                             <el-input v-model="scope.row.Target" maxlength="300" placeholder="请输入目标层" size="mini" @blur="inputBlur"/>
                                                        </span>
                                                       <span v-else>{{ scope.row.Target}}</span>
                                                   </template>
                                                   </el-table-column>
                                                   <el-table-column
                                                       prop="Index"
                                                       label="指标层"
                                                   >
                                                   <template slot-scope="scope">
                                                        <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '指标层'">
                                                            <el-input v-model="scope.row.Index" maxlength="300" placeholder="请输入指标层" size="mini" @blur="inputBlur"/>
                                                        </span>
                                                       <span v-else>{{ scope.row.Index}}</span>
                                                   </template>
                                                   </el-table-column>
                                                   <el-table-column
                                                       prop="Factor"
                                                       label="因子层"
                                                       >
                                                   <template slot-scope="scope">
                                                        <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '因子层'">
                                                            <el-input v-model="scope.row.Factor" maxlength="300" placeholder="请输入因子层" size="mini" @blur="inputBlur"/>
                                                       </span>
                                                       <span v-else>{{ scope.row.Factor}}</span>
                                                   </template>
                                                   </el-table-column>
                                                   <el-table-column
                                                       prop="FactorLayer"
                                                       label="因子"
                                                       >
                                                   <template slot-scope="scope">
                                                        <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '因子'">
                                                            <el-input v-model="scope.row.FactorLayer" maxlength="300" placeholder="请输入因子" size="mini" @blur="inputBlur"/>
                                                        </span>
                                                       <span v-else>{{ scope.row.FactorLayer}}</span>
                                                   </template>
                                               </el-table-column>
                                           </el-table>
                                       </el-row>
                                       <el-row  style="text-align: center;padding: 10px">
                                           <el-button @click=ButtonClick2() type="success" icon="el-icon-check" circle ></el-button>
                                           <el-button @click=deleteClick2() type="danger" icon="el-icon-delete" circle></el-button>
                                       </el-row>
                                   </div>
                               </el-tab-pane>
                               <el-tab-pane label="指标权重设置">
                                   <div class="CustomTableBackground">
                                       <h4 style="text-align: center">权重设置</h4>
                                       <el-table
                                           class="tableStyle data-show-table"
                                           :data="WeightDataTable"
                                           :span-method="arraySpanMethod2"
                                           @cell-click="WeightCellClick"
                                           border
                                           >
                                       <el-table-column
                                               prop="Target"
                                               label="目标层">

                                       </el-table-column>
                                       <el-table-column
                                               prop="Index"
                                               label="指标层">
                                           <template slot-scope="scope">
                                               <el-popover trigger="click" placement="top">
                                                   <p>权重:{{scope.row.IndexWeight}}<br/>
                                                       <el-input v-model="WeightInput" placeholder="请输入权重"></el-input>
                                                   </p>
                                                   <el-button type="primary" size="mini" @click="WeightDataClick1()">确定</el-button>
                                                   <div slot="reference">
                                                       <div>{{ scope.row.Index}}</div>
                                                   </div>
                                               </el-popover>
                                           </template>
                                       </el-table-column>
                                       <el-table-column
                                               prop="Factor"
                                               label="因子层">
                                           <template slot-scope="scope">
                                               <el-popover trigger="click" placement="top">
                                                   <p>权重:{{scope.row.FactorWeight}}<br/>
                                                       <el-input v-model="WeightInput" placeholder="请输入权重"></el-input>
                                                   </p>
                                                   <el-button type="primary" size="mini" @click="WeightDataClick2()">确定</el-button>
                                                   <div slot="reference">
                                                       <div>{{ scope.row.Factor}}</div>
                                                   </div>
                                               </el-popover>
                                           </template>
                                       </el-table-column>
                                       <el-table-column
                                               prop="FactorLayer"
                                               label="因子">
                                           <template slot-scope="scope">
                                               <el-popover trigger="click" placement="top">
                                                   <p>权重:{{scope.row.FactorLayerWeight}}<br/>
                                                       <el-input v-model="WeightInput" placeholder="请输入权重"></el-input>
                                                   </p>
                                                   <p>数据:{{scope.row.FactorLayerData}}<br/>
                                                       <el-input v-model="DataInput" placeholder="请输入数据"></el-input>
                                                   </p>
                                                   <el-button type="primary" size="mini" @click="WeightDataClick3()">确定</el-button>
                                                   <div slot="reference">
                                                       <div>{{ scope.row.FactorLayer}}</div>
                                                   </div>
                                               </el-popover>
                                           </template>
                                       </el-table-column>
                                   </el-table>
                                       <el-row  style="text-align: center;padding: 10px">
                                           <el-button @click=CalculateClick() type="success" icon="el-icon-check" circle ></el-button>
                                           <el-button  type="danger" icon="el-icon-delete" circle></el-button>
                                       </el-row>
                                   <el-row>
                                       <h4 style="text-align: center">结果展示</h4>
                                       <el-table
                                               class="tableStyle data-show-table"
                                               :data="ResultDataTable"
                                               :span-method="arraySpanMethod2"
                                               @cell-click="WeightCellClick"
                                               border
                                       >
                                           <el-table-column
                                                   prop="Target"
                                                   label="目标层">
                                               <template slot-scope="scope">
                                                   <div>{{scope.row.Target}}</div>
                                                   <div>得分：{{scope.row.TargetData}}</div>
                                               </template>
                                           </el-table-column>
                                           <el-table-column
                                                   prop="Index"
                                                   label="指标层">
                                               <template slot-scope="scope">
                                                  <div>{{scope.row.Index}}</div>
                                                  <div>得分：{{scope.row.IndexData}}</div>
                                               </template>
                                           </el-table-column>
                                           <el-table-column
                                                   prop="Factor"
                                                   label="因子层">
                                               <template slot-scope="scope">
                                                   <div>{{scope.row.Factor}}</div>
                                                   <div>得分：{{scope.row.FactorData}}</div>
                                               </template>
                                           </el-table-column>
                                           <el-table-column
                                                   prop="FactorLayer"
                                                   label="因子">
                                               <template slot-scope="scope">
                                                   <div>{{scope.row.FactorLayer}}</div>
                                                   <div>得分：{{scope.row.FactorLayerData}}</div>
                                               </template>
                                           </el-table-column>
                                       </el-table>
                                   </el-row>
                                   </div>
                               </el-tab-pane>
                           </el-tabs>
                       </div>

                  </el-col>
                  <el-col class="data-show-map-wrapper" :span="15" :offset="1">
                      <div id="data-show-map"></div>
                  </el-col>
              </el-row>
        </el-main>
        <el-footer class="data-show-footer" style="height: 20px">
            <span>
        <a
                href="http://geomodeling.njnu.edu.cn//"
                target="__blank"
                rel="noopener noreferrer"
        >Open Geographic Modeling and Simulation</a
        >
        | Copyright © 2011-{{ currentYear }} OpenGMS. All Rights Reserved.
      </span>
        </el-footer>
    </el-container>
</template>

<script>
    import {AnalyzeMap} from "../js/AnalyzeMap";
    import {SplitJson} from "@/views/EvaluateAnalyze/js/getData";
    import {AddJsonData,DeleteJsonDate,createJsonDataOfDatatset,CalculateData} from "../js/optionData";

    export default {
        name: "SystemPage",
        data(){
            return{
                //这是在现有体系页面所需要的数据
                SDGsIndex:[
                    {
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor:'土地资源承载力',
                        FactorLayer:'地形起伏度',
                    },{
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor: '土地资源承载力',
                        FactorLayer: '耕地面积占比'
                    },{
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor:'土地资源承载力',
                        FactorLayer:'土地利用程度'
                    },{
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor:'水资源丰度',
                        FactorLayer:'水资源可用量'
                    },{
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor:'自然环境危害性',
                        FactorLayer:'气象灾害'
                    },{
                        Target:'生态文明指数',
                        Index:'资源承载',
                        Factor:'自然环境危害性',
                        FactorLayer:'地质灾害'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境污染',
                        FactorLayer:'大气环境污染'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境污染',
                        FactorLayer:'水环境污染'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境污染',
                        FactorLayer:'土壤环境污染'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境保护',
                        FactorLayer:'森林覆盖率'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境保护',
                        FactorLayer:'生物丰富度'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境保护',
                        FactorLayer:'自然保护区面积'
                    },{
                        Target:'生态文明指数',
                        Index:'环境压力',
                        Factor:'环境保护',
                        FactorLayer:'自然保护区面积'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'自然资源价值',
                        FactorLayer:'有机质生产价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'自然资源价值',
                        FactorLayer:'生态经济产品价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'固碳释氧价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'涵养水源价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'净化空气价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'营养物质循环价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'土壤保持价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'生物多样性'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'净化空气价值'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'经济规模水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'产业结构水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'财政及社会保障'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'居民生活与消费'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'科技教育水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'基础设施',
                        FactorLayer:'关键交通节点可达性'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'社会服务',
                        FactorLayer:'公共服务设施便捷度'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'能源消耗碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'工业生产过程碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'农业活动碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'生活项目碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳吸收',
                        FactorLayer:'生态系统碳吸收量'
                    }
                ],
                currentYear: new Date().getFullYear(),
                //载入体系页面需要的数据
                needMergeArr: ['Target', 'Index','Factor'],
                rowMergeArrs: {},
                rowCustomMergeArrs:{},
                tabClickIndex: null, // 点击的单元格
                tabClickLabel: '', // 当前点击的列名

                //这是在自定义页面所需要的数据
                ListOne:[ ],
                OneReturn:'',
                ListTwo:[ ],
                TwoReturn:'',
                ListThree:[ ],
                ThreeReturn:'',

                //返回的JSON数据表格
                CustomDataTables:[
                ],

                //自适应浏览器高度
                tableHeight:"",
                tableHeight2:"",

                //设置权重页面所需要的Json数据
                WeightDataTable:"",

                //设置权重页面输入框所需要的数据
                WeightDataIndex:"",
                WeightInput:"",
                DataInput:"",

                //最后结果数据
                ResultDataTable:"",
            }
        },
        methods:{
            mapInit() {
                this.mapObj = new AnalyzeMap("data-show-map");
                this.mapObj.AddGeoJson();
            },
            // 合拼单元格方法
            arraySpanMethod({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === 'Target')
                    return this.mergeAction('Target', rowIndex);
                if (column.property === 'Index')
                    return this.mergeAction('Index', rowIndex);
                if (column.property === 'Factor')
                    return this.mergeAction('Factor', rowIndex);
            },

            mergeAction(val, rowIndex,) {
                let _row = this.rowMergeArrs[val].rowArr[rowIndex];
                let _col = _row > 0 ? 1 : 0;
                return [_row, _col];
            },

            //自定义界面表格合拼
            arraySpanMethod2({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === 'Target')
                    return this.mergeAction2('Target', rowIndex);
                if (column.property === 'Index')
                    return this.mergeAction2('Index', rowIndex);
                if (column.property === 'Factor')
                    return this.mergeAction2('Factor', rowIndex);
            },
            mergeAction2(val, rowIndex,) {
                let _row = this.rowCustomMergeArrs[val].rowArr[rowIndex];
                let _col = _row > 0 ? 1 : 0;
                return [_row, _col];
            },

            rowMergeHandle(arr, data) {
                if (!Array.isArray(arr) && !arr.length) return false;
                if (!Array.isArray(data) && !data.length) return false;
                let needMerge = {};
                arr.forEach(i => {
                    needMerge[i] = {
                        rowArr: [],
                        rowMergeNum: 0
                    };
                    data.forEach((item, index) => {
                        if (index === 0) {
                            needMerge[i].rowArr.push(1);
                            needMerge[i].rowMergeNum = 0;
                        } else {
                            if (item[i] === data[index - 1][i]) {
                                needMerge[i].rowArr[needMerge[i].rowMergeNum] += 1;
                                needMerge[i].rowArr.push(0);
                            } else {
                                needMerge[i].rowArr.push(1);
                                needMerge[i].rowMergeNum = index;
                            }
                        }
                    });
                });
                return needMerge;
            },
            //现有体系页面单元格点击事件
            TableCell({row,rowIndex}){
                row.index=rowIndex;
            },
            cellClick(row,column){
                switch (column.label) {
                    case '目标层':
                        this.tabClickIndex = row.index
                        this.tabClickLabel = column.label
                        break
                    case '指标层':
                        this.tabClickIndex = row.index
                        this.tabClickLabel = column.label
                        break
                    case '因子层':
                        this.tabClickIndex = row.index
                        this.tabClickLabel = column.label
                        break
                    case '因子':
                        this.tabClickIndex = row.index
                        this.tabClickLabel = column.label
                        break
                    default: return
                }
            },
            //失去焦点初始化
            inputBlur() {
                this.tabClickIndex = null
                this.tabClickLabel = ''
            },
            //载入体系页面点击事件
            ButtonClick(){

            },

            //自定义页面点击事件,把数据传到表格里
            ButtonClick1(){
                AddJsonData(this.OneReturn,this.TwoReturn,this.ThreeReturn,this.CustomDataTables);
                //挂载自定义体系表格合拼
                this.rowCustomMergeArrs=this.rowMergeHandle(this.needMergeArr,this.CustomDataTables);
            },
            deleteClick1(){
                DeleteJsonDate(this.CustomDataTables);
            },
            //自定义页面表格点击事件，导出数据
            ButtonClick2(){
                this.WeightDataTable=this.CustomDataTables;

            },
            deleteClick2(){

            },

            //权重设置页面单元格点击事件
            WeightCellClick(row){
                //点击自定义单元格把第几列数据传入
                this.WeightDataIndex=row.index;
            },
            //权重设置页面通过点击确定为其设置权重和数据
            WeightDataClick1(){
                createJsonDataOfDatatset("IndexWeight",this.WeightInput,this.WeightDataTable,this.WeightDataIndex);

            },
            WeightDataClick2(){
                createJsonDataOfDatatset("FactorWeight",this.WeightInput,this.WeightDataTable,this.WeightDataIndex);

            },

            WeightDataClick3(){
                createJsonDataOfDatatset("FactorLayerWeight",this.WeightInput,this.WeightDataTable,this.WeightDataIndex);
                createJsonDataOfDatatset("FactorLayerData",this.DataInput,this.WeightDataTable,this.WeightDataIndex);

            },
            //权重设置页面进行计算
            CalculateClick(){
                CalculateData(this.WeightDataTable);
                this.ResultDataTable=this.WeightDataTable;
            }
        },
        //挂载前加载地图
        mounted() {
            this.$nextTick(() =>{
                // 根据浏览器高度设置初始高度
                this.tableHeight = (window.innerHeight-300);
                this.tableHeight2=(window.innerHeight-570);
                // 监听浏览器高度变化，改变表格高度
                window.onresize = () =>{
                    this.tableHeight = (window.innerHeight-300);
                    this.tableHeight2=(window.innerHeight-570);
                }
            })
            this.rowMergeArrs = this.rowMergeHandle(this.needMergeArr, this.SDGsIndex);
            this.mapInit();
            this.ListOne=SplitJson("维度","目标","领域","一级指标","一级目标");
            this.ListTwo=SplitJson("具体目标","具体目标","指数","二级指标","二级指数");
            this.ListThree=SplitJson("评价指标","具体指标","指标","评价因子","评价因子");
        },
        //之后销毁地图
        beforeDestroy() {
            this.mapObj && this.mapObj.destroy();
        },
    }
</script>

<style scoped>
    .data-show {
        height: 100%;
        width: 100%;

    }
    .data-show-main{
        height: 95%;
        width: 100%;
    }

    .data-show-header,
    .data-show-map-wrapper,
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

    .data-show-content {
        padding: 30px 20px;
    }

    .data-show-sider {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .data-show-table{
        height: 95%;
        width: 95%;
        margin-top: 2.5%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
    }

    .header-logo {
        display: block;
        height: 100%;
        background: url("../../../assets/picture/logo.png") no-repeat scroll left center;
        background-size: auto 35px;
    }

    .data-show-map-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        background-size: 100% 100%;
    }


    /deep/.el-tabs__item {
        padding: 0 20px;
        height: 40px;
        box-sizing: border-box;
        display: inline-block;
        list-style: none;
        font-size: 15px;
        font-weight: 500;
        margin-left: 2px;
        color: #ffffff;
    }

    .CustomTableBackground{
        width: 95%;
        height: 100%;
        background-color: #ffffff;
        margin-left: 10px;
        margin-right: 10px;
    }

    #data-show-map {
        height: 95%;
        width: 95%;
    }

    .data-show-footer {
        position: relative;
        height: 20px;
        padding: 0;
        background-color: rgba(255, 255, 255, 0.6);
    }

    .data-show-footer > span {
        right: 10px;
        position: absolute;
    }
</style>

