<template>
  <div class="container" :style="{height: height}">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
      <button type="primary"></button>
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <!-- <TabBar></TabBar> -->
  </div>
</template>

<script>
  import card from '@/components/card';
  import TabBar from '@/components/tabBar.vue';
  import {
    get
  } from '@/utils/wxStorageHelper.js';

  export default {
    data() {
      return {
        motto: 'Hello World',
        userInfo: {}
      }
    },
    components: {
      card,
      TabBar,
    },
    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    methods: {
      handleChange(detail) {
        console.log('============12', detail);
      },
      bindViewTap() {
        const url = '../logs/main'
        wx.navigateTo({
          url
        })
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },
    computed: {
      height() {
        const systemInfo = get("systemInfo");
        if (!systemInfo) return "100%";
        return `${(JSON.parse(systemInfo).windowHeight - 50)}px`;
      }
    }

  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
