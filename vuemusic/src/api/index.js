//引入axios和base的数据，定义方法，使调用这些方法时，获得指定数据
import axios from 'axios';
import {billList,baseUrl,play,lrc} from './base'

// 歌曲列表接口
// 要求调用接口时传入{type:1,size:10,offset:0}
export function songlist(obj){
    return axios.get(baseUrl+billList,{
        params:obj
    })
}


// 播放接口
export function songplay(obj){
    return axios.get(baseUrl+play,{
        params:obj
    })
}

// 歌词
export function songlrc(obj){
    return axios.get(baseUrl+lrc,{params:obj})
}