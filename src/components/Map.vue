<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import echarts from "echarts"; //基于js开源图表库
// import '../api/app.9dde19db2ea3bff55dea.hot-update'
//下载一个包含中国地图的文件也可
import "../../node_modules/echarts/map/js/china";
// import elementResize from 'element-resize-detector' // 尺寸监听组件
export default {
  // data(){
  //   return{
  //    kuandu:true
  //   }
  // },

  //原项目是直接用 <script> 引入的vue项目写的，里面的内容是在js标签里面的，所以把它的内容放在vue组件生命周期函数mounted里面
  mounted() {
      // 请求省市数据     
    // getncovcity().then(data => {
    //   console.log(data);
    //   let dataArr = [];     ////从一个大对象里得到一个数组的装有对象元素数据方法，建立一个空数组，遍历大对象，通过数组的push方法把遍历到的对象数据返回到数组里
    //   for(let i =0 ;i<data.data.newslist.length; i++){
    //       let t = data.data.newslist[i]
    //       dataArr.push({
    //           name:t.provinceShortName,
    //           value:t.currentConfirmedCount,
            //   itemStyle:{                       ///搞指定数量的颜色的///
            //       areaColor:(function(){
            //           let num = t.currentConfirmedCount;
            //           if(num ==0){
            //               return '#fff'
            //           }else if(num>0 && num<10){
            //               return '#fdfdcf'
            //           }else if(num>=10&&num<20){
            //               return '#fe9e83'
            //           }else if(num>=20&&num<30){
            //               return '#e55a4e'
            //           }else{
            //               return '#4f070d'
            //           }
            //       })()
            //   }
      //     })
      // }


    //  $("#container>div>canvas").css('width',$("#container").width());
    // var mainChart = document.getElementById("container");
    // this.charts = echarts.init(mainChart); // 图标ID初始化
    // // 初始化element-resize-detector组件
    // var elementResize = elementResize({
    //   strategy: "scroll", // <- 推荐监听滚动，提升性能
    //   callOnAdd: true, // 添加侦听器时是否应调用,默认true
    // });
    // elementResize.listenTo(mainChart, function (element) {
    //   echarts.init(mainChart).resize(); // 当元素尺寸发生改变是会触发此事件，刷新图表
    // });

    //创建一个chart
    let myCharts =document.getElementById('container');
     myCharts.style.width=window.innerWidth+'px';
    var myChart = echarts.init(document.getElementById("container"));
   
    var option = {
      tooltip: {
        show: true,
        formatter: function (params, ticket, callback) {
          console.log(params);
          return (
            "<div><p>省：" +  //这里的params是该组件自带的大对象，里面的params.value、params.name属性值显示为null，需要手动给
            params.name +
            "</p><p>现存确诊：" +
            params.value +
            "</p></div>"
          );
        },
      },
      visualMap:{  //视觉映射组件
            type:'piecewise', //连续型数据平均分段
            pieces:[{ //能够自动获取地图的数据
                min:1,
                max:10
            },{
                min:10,
                max:20
            },{
                min:20,
                max:30
            },{
                min:30,
                max:40
            }]
        },
      /*方法二 */
      series: [
        {
          name: "省",
          type: "map",
          map: "china",
          roam: true,
          zoom: 1.2,
          aspectScale: 0.75, //设置地图比例大小
          label: {
            //latbel：{}表示图形上的文本标签
            normal: {
              show: true,
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            //地图区域的多边形 图形样式
            normal: {
              areaColor: "rgba(0,255,236,0.1)", //地图背景颜色
              borderColor: "rgba(118,237,236,1)", //地图描边颜色
            },
            emphasis: {
              //高亮状态下多边形和标签样式
              areaColor: "rgba(118,237,236,0.8)", //地图区域的颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          // data:dataArr,//给大对象params里面的name、value属性赋值
        },
      ],
    };
    //显示地图
    myChart.setOption(option, true);
  },
};
</script>

<style>
#container {
  width: 100%;
  height: 460px;
}
</style>