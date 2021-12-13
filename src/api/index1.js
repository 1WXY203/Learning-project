import { baseUrl,ncov,ncovabroad,key } from "./base";
import axios from 'axios';
import '../api/app.9dde19db2ea3bff55dea.hot-update'

// import qs from 'querystring';
// import VueAxios from "vue-axios";
// Vue.use(VueAxios,axios);
    //定义接口怎么定义：
//抗击疫情接口
export function getncov(){
     return axios.get(baseUrl+ncov+'?key='+key.key);
}
//海外肺炎疫情接口
export function postncovcity(){
    return axios.get(baseUrl+ncovabroad+'?key='+key.key);
}
//在js里面没有vue js部分那么多组成