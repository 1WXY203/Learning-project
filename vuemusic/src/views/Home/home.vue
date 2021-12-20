<template>
  <div>
      <Songtypelist title='新歌榜' :songlist='xin' type='1' />
      <Songtypelist title='热歌榜' :songlist='re' type='2' />
      <Songtypelist title='摇滚榜' :songlist='yao' type='11' />

      <!-- tab切换 -->
      <Tabs :activeKey='activeKey' @changeKey='changeKey'>
        <Tab label='tab1' akey='1'>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
        </Tab>
        <Tab label='tab2' akey='2'>
          tab2的内容
        </Tab>
      </Tabs>
  </div>
</template>

<script>
import Songtypelist from './songtypelist';
import {songlist} from '../../api/index'
import install from '../../components/mytabs/index.js'
import Vue from 'vue';
// 注册插件
Vue.use(install);
export default {
  data(){
    return{
      xin:[],
      re:[],
      yao:[],
      activeKey:1
    }
  },
  methods:{
    changeKey(cs){
      this.activeKey = cs;
    }
  },
  components:{
    Songtypelist
  },
  mounted(){
    // 新歌榜
    songlist({
      type:1,
      size:6,
      offset:0
    }).then(data=>{
      console.log(data)
      this.xin = data.data.song_list;
    });

    // 热歌榜
    songlist({
      type:2,
      size:6,
      offset:0
    }).then(data=>{
      console.log(data)
      this.re = data.data.song_list;
    });

    // 摇滚榜
    songlist({
      type:11,
      size:6,
      offset:0
    }).then(data=>{
      console.log(data)
      this.yao = data.data.song_list;
    })
  }
}
</script>

<style>

</style>