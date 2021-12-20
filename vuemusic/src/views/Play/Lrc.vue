<template>
  <div>
      歌词
  </div>
</template>

<script>
import {songlrc} from '../../api/index'
export default {
    props:['songid'],
    mounted(){
        songlrc({
            songid:this.songid
        })
        .then(data=>{
            console.log(data)
        })
    }
}
</script>

<style>

</style>