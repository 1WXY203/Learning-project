<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{title}}</h3>
        <router-link :to='"/list/"+type'>更多</router-link>
      </div>
      <div class="list clearfix">
          <Item :data="item" v-for='item in songlist' :key='item.song_id' />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./item";
export default {
  props: ["songlist", "title",'type'],
  components: {
    Item
  }
};
</script>

<style>
.clearfix{
    clear: both;
    overflow: hidden;
}
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}
.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 4px;
    margin-bottom: 10px;
}
.clear-padding {
    padding-left: 3px !important;
    padding-right: 0 !important;
}
</style>