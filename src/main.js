//全局配置的插件
import Vue from 'vue' //全局配置vue插件
import App from './App.vue'  //全局配置App.vue组件的内容
import router from './router' //全局配置router路由器插件
import './/api/index1' //全局配置index.js组件的内容
import vueAwesomeSwiper from 'vue-awesome-swiper'; //全局配置vue-awesome-swiper组件
import '../node_modules/swiper/swiper-bundle.css'

Vue.use(vueAwesomeSwiper);//因为vue -awesome-swiper有install方法，如果不调用，会报错，所以必须告诉这个组件我把暴露的install方法隐藏起来
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


