<template>
  <div class="case-num">
    <div class="container">
      <div class="title">
        <span>截止 {{ formatTime }} 全国数据统计</span>
        <!-- <span>截止 {{ count.time | formatTime2 }} 全国数据统计</span>
        <span>
          截止
          <i v-formatTime3 = "count.time"></i> 全国数据统计
        </span> -->
      </div>
    </div>
    <div class="num">
      <ul class="count">
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em :style="{color:'rgb(247,76,49)'}">{{count.currentConfirmedIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(247,76,49)'}">{{count.currentConfirmedCount}}</strong>
            <span>现存确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em
                  :style="{color:'rgb(247,130,7)'}"
                >{{count.suspectedIncr>0? '+' + count.suspectedIncr : count.suspectedIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(247,130,7)'}">{{count.suspectedCount}}</strong>
            <span>现存疑似</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em
                  :style="{color:'rgb(162,90,78)'}"
                >{{count.seriousIncr>0?"+"+count.seriousIncr:count.seriousIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(162,90,78)'}">{{count.seriousCount}}</strong>
            <span>现存重症</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em
                  :style="{color:'rgb(174, 33, 44)'}"
                >{{count.confirmedIncr>0?"+"+count.confirmedIncr:count.confirmedIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(174, 33, 44)'}">{{count.confirmedCount}}</strong>
            <span>累积确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em
                  :style="{color:'rgb(93, 112, 146)'}"
                >{{count.deadIncr>0?'+'+count.deadIncr:count.deadIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(93, 112, 146)'}">{{count.deadCount}}</strong>
            <span>累计死亡</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em
                  :style="{color:'rgb(40, 183, 163)'}"
                >{{count.curedIncr>0?'+'+count.curedIncr:count.curedIncr}}</em>
              </b>
            </div>
            <strong :style="{color:'rgb(40, 183, 163)'}">{{count.curedCount}}</strong>
            <span>累计治愈</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Object,
      required: true,
      default: function() {
        return {};//传过来一个在该组件内全局的数据，在vue中return出的数据都是在该组件内全局生效的，data里面的数据也是
      }
    }
  },
  computed: {
    //计算属性做法
    formatTime() { //定义一个fjormatTime方法对反回来的数据进行处理，然后输出，用模板语法直接用变量名就可调用
      let t = new Date(this.count.time).toLocaleDateString();
      let h = new Date(this.count.time).toLocaleTimeString();
      t = t.replace(/\//g, "-");
      h = h.replace(/[上|下]午/g, "");
      return t + " " + h;
    }
  },
  //过滤器做法
  // filters: {
  //   formatTime2(value) {
  //     let t = new Date(value).toLocaleDateString();//得到日期
  //     let h = new Date(value).toLocaleTimeString();//得到时间
  //     t = t.replace(/\//g, "-");
  //     h = h.replace(/[上|下]午/g, "");
  //     return t + " " + h;
  //   }
  // },
  //自定义指令做法
  // directives: {
  //   formatTime3:function(el, binding) {   //原本在formatime3后面的属性值是对象的，然后属性名是inserted，属性值是函数，但是想显示的数据会变成invalid Data invalid
  //       let value = binding.value;
  //       let t = new Date(value).toLocaleDateString();
  //       let h = new Date(value).toLocaleTimeString();
  //       t = t.replace(/\//g, "-");
  //       h = h.replace(/[上|下]午/g, "");
  //       el.innerHTML = t+' '+h;
  //     }
  //   }
};
</script>

<style scoped>
body{
  font-size: 62.5%;
}
.case-num {
  padding: 0.16rem;
  background: #fff;
}
.container {
  margin: -0.16rem 0 0;
  font-size: 0.12rem;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0 0.7rem;
  line-height: 0.24rem;
}
.title span {
  color: #666;
  font-weight: bold;
  font-size:18px;

}
.title em {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.24rem;
  margin-right: -0.16rem;
  padding: 0 0.08rem;
  color: #666;
  font-style: normal;
  background-color: #f7f7f7;
  border-radius: 0.12rem 0 0 0.12rem;
}
.title em img {
  width: 0.123rem;
  height: 0.123rem;
  margin-right: 0.037rem;
}
.num {
  position: relative;
  text-align: center;
  background: #fff;
}
.num::after {
  position: absolute;
  top: -0.01rem;
  left: -0.01rem;
  display: block;
  width: 200%;
  height: 200%;
  border: 0.01rem solid #ebebeb;
  border-radius: 0.08rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
  transform: scale(0.5);
  transform-origin: 0 0;
  content: "";
}
.num ul {
  flex-flow: wrap;
  position: relative;
  display: flex;
  margin: 0;
  padding: 0.08rem 0 0.12rem;
}
.num ul li {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 33.3333333%;
  margin: 10px 0;
}
.num ul li .create-item {
  position: relative;
  text-align: center;
}
.num ul li .create-item .create-count {
  display: flex;
  align-items: center;
  height: 0.12rem;
  margin-bottom: 0.02rem;
  color: #666;
  font-weight: 400;
  font-size: 1rem;
}
.num ul li .create-item .create-count em {
  font-weight: 400;
  font-style: normal;
}
.num ul li strong {
  margin-bottom: 0.01rem;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 2rem;
}
.num ul li span {
  display: block;
  color: #333;
  font-weight: 700;
  font-size: 0.11rem;
  line-height: 0.15rem;
}
</style>