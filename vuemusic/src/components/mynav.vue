<template>
  <div class="navbox">
      <router-link to='/' exact>首页</router-link>
      <router-link to='/bang'>榜单</router-link>
      <router-link to='/mine'>我的</router-link>
      <router-link to='/search'>搜索</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.navbox{
    display: flex;
    background: #ffffff;
    margin-bottom: 10px;
    a{
        flex:1;
        border-bottom: 2px solid transparent;
        font-size:16px;
        text-align: center;
        padding:10px 0;
        color:black;
    }
    .active{
        color:red;
        border-bottom-color: red;
    }
}

</style>