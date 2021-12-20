<template>
  <div>
      <div class="head">
          <span class="back" @click="goback">返回</span>
          {{title}}
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.back();
        }
    },
    props:['title']
}
</script>

<style scoped lang='less'>
.head{
    height: 60px;
    width:100%;
    text-align: center;
    color:#fff;
    font-size:16px;
    position: relative;
    line-height: 60px;
    font-weight: bold;
    background: red;
    .back{
        position: absolute;
        top:0;
        left:30px;
        font-weight: normal;
        cursor: pointer;
    }
}

</style>