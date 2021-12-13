<template>
  <div class="info">
    <p class="title">
      <i></i>
      病毒信息
    </p>
    <div class="content">
      <p class="one-txt-cut">{{ info.remark1 }}</p>
      <p class="one-txt-cut">{{ info.remark2 }}</p>
      <p class="one-txt-cut">{{ info.remark3 }}</p>
      <p class="one-txt-cut">{{ info.note1 }}</p>
      <p class="one-txt-cut">{{info.note2 }}</p>
      <p class="one-txt-cut">{{ info.note3 }}</p>
    </div>
  </div>
</template>

<script>
// import index1 from '../api/index1';
export default {
  data() {
    return{}
  },
  mounted() {},
  props: {
    info: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style lang='less' scoped >
@import "../assets/common.css";
.info {
  padding: 0 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  .title {
    margin: 10px 0;
    font-size: 1rem;
    i {
      display: inline-block;
      width: 0.5rem;
      height: 1.5rem;
      margin-right: 0.03rem;
      background: #4169e2;
      vertical-align: middle;
    }
  }
  .content {
    padding: 0.06rem 0.16rem;
    p {
      font-size: 13px;
      margin: 5px 0;
    }
  }
}
</style>