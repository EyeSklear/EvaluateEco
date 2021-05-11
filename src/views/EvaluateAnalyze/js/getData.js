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


//通过json数组属性名分割字符串,合拼一级指标类别 并去除重复列
//参数列表:List1Column表示四个列表对应的列
//参数列表：TargetColumn表示合并修改统一的列名
export const SplitJson=(List1Column,List2Column,List3Column,List4Column,TargetColumn)=>
{
    //先提取单列
    let List1=JSON.stringify(AnalyzePageTableData.ListA,[List1Column]);
    //统一命名为一级目标
    List1=List1.replace(new RegExp(List1Column,'g'),TargetColumn);
    //转回Json
    List1=JSON.parse(List1);
    //合并
    let List2=JSON.stringify(AnalyzePageTableData.ListB,[List2Column]);
    List2=List2.replace(new RegExp(List2Column,'g'),TargetColumn);
    List2=JSON.parse(List2);
    let List12=List1.concat(List2);
    let List3=JSON.stringify(AnalyzePageTableData.ListC,[List3Column]);
    List3=List3.replace(new RegExp(List3Column,'g'),TargetColumn);
    List3=JSON.parse(List3);
    let List13=List12.concat(List3);
    let List4=JSON.stringify(AnalyzePageTableData.ListD,[List4Column]);
    List4=List4.replace(new RegExp(List4Column,'g'),TargetColumn);
    List4=JSON.parse(List4);
    let List14=List13.concat(List4);
    //去除重复列
    var temp={};//存放id
    var result=[];//新数组
    List14.map((item)=>{
        if(!temp[item[TargetColumn]]){
            result.push(item);
            temp[item[TargetColumn]]=true;
        }
    })
    console.log(result);
    return result;
}

