import AnalyzePageTableData from "../../../../public/JsonAnalyze/AnalyzePageTableData.json"
import ChinaData from "../../../../public/JsonAnalyze/ChinaData.json"

//得到四个体系的数据
export const GetTableData=(List)=>
{
    switch (List) {
        case "ListA":
            return AnalyzePageTableData.ListA;
        case "ListB":
            return AnalyzePageTableData.ListB;
        case "ListC":
            return AnalyzePageTableData.ListC;
        case "ListD":
            return AnalyzePageTableData.ListD;
        default :
            return null;
    }
}

//得到中国Json数据
export const GetChinaJson=()=>
{
    return ChinaData.china
}


//通过json数组属性名分割字符串
export const SplitJson=()=>
{
    let NewData=JSON.stringify(AnalyzePageTableData.ListA,['维度']);
    console.log(NewData);
}

