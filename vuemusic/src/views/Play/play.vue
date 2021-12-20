<template>
  <div>
      <Head :title='title' />
      <div class="info">
        <p>{{songinfo.title}}</p>
        <p>{{songinfo.author}}</p>
        <img :src="songinfo.pic" alt="">
      </div>
      <div class="geci">
        <Lrc :songid='$route.params.songid' />
      </div>
      <div class="playbox">
        <audio :src="songinfo.show_link" controls></audio>
      </div>
  </div>
</template>

<script>
import Head from '../../components/head'
import Lrc from './Lrc'
import { songplay } from '../../api/index'
export default {
  components:{
    Head,
    Lrc
  },
  data(){
    return{
      title:'',
      songinfo:{}
    }
  },
  mounted(){
    // console.log('歌曲id是：'+this.$route.params.songid)
    songplay({
      songid:this.$route.params.songid
    })
    .then(data=>{
      console.log(data.data)
      this.title = data.data.songinfo.title
      this.songinfo = {
        title:data.data.songinfo.title,
        author:data.data.songinfo.author,
        show_link:data.data.bitrate.show_link,
        pic:data.data.songinfo.pic_huge
      }
    })
  }
}
</script>

<style scoped lang='less'>
.info{
  text-align: center;
  width:100%;
  img{
    width:50%;
    margin:10px auto;
  }
}
.playbox{
  text-align: center;
}
</style>