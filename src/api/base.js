export let baseUrl = 'http://api.tianapi.com'; //公共部分的
export let ncov = '/ncov/index';  //抗击疫情
export let ncovabroad = '/ncovabroad/index';  //海外肺炎疫情
//这样写的目的时好在节点很多的情况下好维护点
//其实也可以直接用axios里面请求网络数据的

//导出一个key值
export const key = {key:'531f58ce77e087be6dba31be0c62a7b3'};