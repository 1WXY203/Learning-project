<template>
  <li class='item'>
      <router-link :to='"/play/"+data.song_id'>
          <div class="pic">
                <img :src="data.pic_huge" alt="">
            </div>
            <div class="info">
                <p>{{data.title}}</p>
                <p>{{data.author}}</p>
            </div>
      </router-link>
  </li>
</template>

<script>

export default {
    props:{
        data:{
            type:Object,
            required:true,
            default:function(){
                return {}
            }
        }
    }
}
</script>

<style lang='less' scoped>
.item{
    overflow: hidden;
    padding:5px;
    border-bottom: 1px solid #efefef;
    .pic{
        float: left;
        width:40%;
        img{
            width:100%;
        }
    }
    .info{
        float: left;
        width: 60%;
        padding-left:20px;
        box-sizing: border-box;
    }
}
</style>