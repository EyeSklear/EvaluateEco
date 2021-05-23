
//为一条数据添加属性键和属性值
export const createJsonData=(prop, val, OneJsonData)=>{
    if(typeof val=="undefined"){
        delete OneJsonData[prop];
    }else {
        OneJsonData[prop]=val;
    }
}

//为json对象数组添加数据
export const AddJsonData=(FirstTarget,SecondTarget,ThirdTarget,Dataset)=>
{
    var OneJsonData={"Target":"生态文明指数"};
    createJsonData("Index",FirstTarget,OneJsonData);
    createJsonData("Factor",SecondTarget,OneJsonData);
    createJsonData("FactorLayer",ThirdTarget,OneJsonData);
    Dataset.push(OneJsonData);
    console.log(Dataset);
}

//为数据集删除最后一列数据
export const DeleteJsonDate=(Dataset)=>
{
    Dataset.splice(Dataset.length-1,1);
}

//为Json数据集的其中一条数据添加属性键和属性值
export const createJsonDataOfDatatset=(prop,val,Dataset,index)=>{
    createJsonData(prop,val,Dataset[index]);

}

//计算每个权重和数据指标值
export const CalculateData=(Dataset)=>
{
    //第一遍循环先计算因子层的数据
    var TempIndex=0;
    var DataSum=Number(Dataset[0].FactorLayerData)*Number(Dataset[0].FactorLayerWeight);
    var WeightSum=Number(Dataset[0].FactorLayerWeight);
    var Result;
    for(var i=0;i<Dataset.length;i++){
        if(Object.prototype.hasOwnProperty.call(Dataset[i],'FactorWeight')){
             if(i!=0){
                 Result=DataSum/WeightSum;
                 createJsonDataOfDatatset("FactorData",Result,Dataset,TempIndex);
                 DataSum=Number(Dataset[i].FactorLayerData)*Number(Dataset[i].FactorLayerWeight);
                 WeightSum=Number(Dataset[i].FactorLayerWeight);
             }
            TempIndex=i;
        }else{
            DataSum=DataSum+Number(Dataset[i].FactorLayerData)*Number(Dataset[i].FactorLayerWeight);
            WeightSum=Number(WeightSum)+Number(Dataset[i].FactorLayerWeight);
        }
    }
    Result=DataSum/WeightSum;
    createJsonDataOfDatatset("FactorData",Result,Dataset,TempIndex);
    //第二遍循环计算指标层的数据
    TempIndex=0;
    DataSum=Number(Dataset[0].FactorData)*Number(Dataset[0].FactorWeight);
    WeightSum=Number(Dataset[0].FactorWeight);
    for (i=0;i<Dataset.length;i++){
        if(Object.prototype.hasOwnProperty.call(Dataset[i],'IndexWeight')) {
            if (i != 0) {
                Result = DataSum / WeightSum;
                createJsonDataOfDatatset("IndexData", Result, Dataset, TempIndex);
                DataSum = Number(Dataset[i].FactorData)*Number(Dataset[i].FactorWeight);
                WeightSum=Number(Dataset[0].FactorWeight);
            }
            TempIndex=i;
        }else{
            if(Object.prototype.hasOwnProperty.call(Dataset[i],'FactorData')){
                DataSum=DataSum+Number(Dataset[i].FactorData)*Number(Dataset[i].FactorWeight);
                WeightSum=Number(WeightSum)+Number(Dataset[i].FactorWeight);
            }
        }
    }
    Result=DataSum/WeightSum;
    createJsonDataOfDatatset("IndexData",Result,Dataset,TempIndex);
    //最后一遍循环目标层数据
    TempIndex=0;
    DataSum=Number(Dataset[0].IndexData)*Number(Dataset[0].IndexWeight);
    WeightSum=Number(Dataset[0].IndexWeight);
    for(i=0;i<Dataset.length;i++){
        if(Object.prototype.hasOwnProperty.call(Dataset[i],'IndexData')){
            DataSum=DataSum+Number(Dataset[0].IndexData)*Number(Dataset[0].IndexWeight);
            WeightSum=WeightSum+Number(Dataset[0].IndexWeight);
        }
    }
    Result=DataSum/WeightSum;
    createJsonDataOfDatatset("TargetData",Result,Dataset,TempIndex);

}

//最后结果的展示
export const ShowResult=(Dataset,ListColumn1,ListColumn2)=>
{
    let ResultList=JSON.stringify(Dataset,[ListColumn1,ListColumn2]);
    ResultList=JSON.parse(ResultList);
    return ResultList;
}