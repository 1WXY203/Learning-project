<template>
  <div class="swiperBox">
    <swiper class="swiper1" ref="mySwiper" :options="swiperOptions">
      <swiper-slide id="main"></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <!-- <div class="swiper-pagination-" slot="pajination"></div>    pagination:页码    此处div的作用是生成一个点点的页码   -->
    </swiper>
    <ul class="navigator">
      <li
        class="navigatorItem"
        @click="getIndex(0)"
        :class="{ active: cur == 0 }"
      >
        新增疑似/新增确诊
      </li>
      <!-- <!/使用动态类给不同元素添加一样的点击样式(动态绑定class如何使该动态类生效：元素身上的事件触发时，事件向绑定的函数里面传入的参数赋给函数里面的一个变量，该变量会影响data函数里面的对应的属性的值(证明data函数里面的数据为最低等级)，动态类的属性值做一个是否等于该data的值的判断，然后给动态类写样式完成)> -->
      <li
        class="navigatorItem"
        @click="getIndex(1)"
        :class="{ active: cur == 1 }"
      >
        现存确诊/现存疑似
      </li>
      <li
        class="navigatorItem"
        @click="getIndex(2)"
        :class="{ active: cur == 2 }"
      >
        死亡/治愈
      </li>
      <li
        class="navigatorItem"
        @click="getIndex(3)"
        :class="{ active: cur == 3 }"
      >
        病死率
      </li>
      <li
        class="navigatorItem"
        @click="getIndex(4)"
        :class="{ active: cur == 4 }"
      >
        治愈率
      </li>
    </ul>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../node_modules/echarts/dist/echarts.min.js";
export default {
  data() {
    return {
      swiperOptions: {
        //   pajination:{  //此处的作用是生成一个点点的页码
        //       el:'.swiper-pagination'
        //   }
        on: {
          //  on属性配合navigatorItem方法可以实现滑动到某一个页面得到该页面的下标
          slideChangeTransitionEnd: () => {
            console.log(this);
            this.cur = this.swiper.activeIndex;
          },
          // slideChangeTransitionEnd: function(){
          //     console.log(this)
          // cur =this.activeIndex;    //此方法的this的作用域是swiperOptions，没有cur等级高
          // }
        },
      },
      cur: 0,
    };
  },
  methods: {
    getIndex(index) {
      //元素里面定义的事件名还可以给函数传参数：getIndex(number)
      this.cur = index;
      this.swiper.slideTo(index, 300); //swiper.slideTo()方法：点击到指定元素上就滑动到指定界面，元素里面的index值必须从上往下从零开始
    },
  },
  computed: {
    swiper() {
      //显示滑动效果的
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    let myCharts =document.getElementById('main');
     myCharts.style.width=window.innerWidth+'px';
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        // text: '<div>Stacked Line<div/>',
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style>
.swiperBox {
  margin: 20px 0;
  height: 300px;
}
.swiper1 {
  height: 280px;
}

.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 1.6rem;
  justify-content: center;
  margin: 0.6rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20 - 0.2rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.45rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  margin-left: 0.25rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
#main{
  width: 100%;
  height: 300px;
}
</style>