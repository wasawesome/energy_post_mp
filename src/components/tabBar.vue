<template>
  <div class='tab-bar'>
    <i-tab-bar :current="current" color="#f759ab" @change="handleChange" fixed>
      <i-tab-bar-item key="index" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
      <i-tab-bar-item key="logs" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
      <i-tab-bar-item key="counter" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        current: 'index'
      };
    },
    methods: {
      handleChange(detail) {
        console.log('============111', detail);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tab-bar {
    // height: 96rpx;
    width: 100%;
    // border-top: 1px solid #EDEDED;
    // display: flex;
    // flex-wrap: nowrap;
    // justify-content: center;
    // background-color: #EFEFEF;
    // position: fixed;
    // bottom: 0;

    .tab-item {

      // width: 96rpx;
      img {
        width: 80rpx;
        height: 80rpx;
      }

      span {
        font-size: 36rpx;
      }

      .logo {
        width: 96rpx;
        height: 96rpx;
      }
    }
  }
</style>
