<template>
  <div>
      <p>404,您访问的页面飞走了...</p>
      <button @click="toHome">返回首页</button> 
      <p>{{time}}秒后返回首页</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            time:5,
            timer:null
        }
    },
    mounted(){
        this.timer = setInterval(()=>{
            if(this.time == 0){
                this.$router.push('/')
            }
            this.time--;
        },1000)
    },
    beforeDestroy(){
        clearInterval(this.timer);
    },
    methods:{
        toHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>