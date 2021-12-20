<template>
  <div class="item">
    <router-link :to='"/play/"+data.song_id'>
      <div class="img-wrapper">
        <img :src="data.pic_huge" alt />
      </div>
      <div class="short main">{{data.title}}</div>
      <div class="short gray">{{data.author}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
.short {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main {
  margin-top: 4px;
  font-size: 12px;
}

.gray {
  font-size: 12px;
  color: #999;
}
</style>