<template>
  <div>
      <Head :title='titles[$route.params.type]+"列表"' />
      <Item v-for='item in list' :key='item.song_id' :data='item' />
  </div>
</template>

<script>
import { songlist } from '../../api/index'
import Head from '../../components/head'
import Item from './item'
export default {
  data(){
    return {
      list:[],
      titles:{
        1:'新歌榜',
        2:'热歌榜',
        11:'摇滚榜'
      }
    }
  },
  components:{
    Item,
    Head
  },
  mounted(){
    // console.log(this.$route.params.type)
    songlist({
      type:this.$route.params.type,
      size:20,
      offset:0
    })
    .then(data=>{
      console.log(data.data)
      this.list = data.data.song_list
    })
  }
}
</script>

<style>

</style>