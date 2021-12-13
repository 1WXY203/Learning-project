<template>
  <div id="app">
    <div>
      <img src="./assets/1.jpg" alt="" style="back" />
      <!-- 病毒信息 -->
    <bdinfo :info='info' />
    <!-- 全国统计数据 -->
    <tongji :count='count' />
    <!-- 地图信息 -->
    <myMap />
    <!--趋势  -->
    <qushi />
    <!-- 新闻 -->
    <news :news='news' />   
    </div>
  </div>
</template>
 <script>
import bdinfo from "./components/bdinfo.vue";
import tongji from './components/tongji.vue';
import { getncov, postncovcity } from "./api/index1.js";
import myMap from './components/Map';
import qushi from './components/qushi.vue';
import news from './components/news.vue';
export default {
  name: "App",
  components: {
    bdinfo,
    tongji,
    myMap,
    qushi,
    news,
  },
  data() {
    return {
      info: {
        remark1: "",
        remark2: "",
        remark3: "",
        note1: "",
        note2: "",
        note3: ""
      },
      count:{
        time:'',
        currentConfirmedCount:'',
        confirmedCount:'',
        suspectedCount:'',
        curedCount:'',
        deadCount:'',
        seriousCount:'',
        suspectedIncr:'',
        currentConfirmedIncr:'',
        confirmedIncr:'',
        curedIncr:'',
        deadIncr:'',
        seriousIncr:''
      },
      news:[]
    };
  },
  mounted() {
    getncov().then(data => {
      console.log(data); //请求成功的结果
      let desc = data.data.newslist[0].desc;
      this.info.remark1 = desc.remark1; //this给该组件全局定义一个变量
      this.info.remark2 = desc.remark2;//info会给上面的也会加info
      this.info.remark3 = desc.remark3;
      this.info.note1 = desc.note1;//
      this.info.note2 = desc.note2;
      this.info.note3 = desc.note3;

      // 统计数据
      this.count.time= desc.modifyTime;
      this.count.currentConfirmedCount = desc.currentConfirmedCount;
      this.count.confirmedCount=desc.confirmedCount;
      this.count.suspectedCount = desc.suspectedCount;
      this.count.curedCount = desc.curedCount;
      this.count.deadCount = desc.deadCount;
      this.count.seriousCount = desc.seriousCount;
      this.count.suspectedIncr = desc.suspectedIncr;
      this.count.currentConfirmedIncr = desc.currentConfirmedIncr;
      this.count.confirmedIncr=desc.confirmedIncr;
      this.count.curedIncr = desc.curedIncr;
      this.count.deadIncr = desc.deadIncr;
      this.count.seriousIncr = desc.seriousIncr;

      //新闻数据
     this.news = data.data.newslist[0].news; 
     console.log(Array.isArray(data.data.newslist))   //没有得到news的值 ，位置错误导致值没有获取到，data错误：屏幕中中出现的data对象没有被赋值
    });
    
    
  },
};
</script>
<style lang="less">
#app img{
  width: 100%;
  height: 200px;
}

</style>
