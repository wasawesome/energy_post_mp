<script>
  import {
    get,
    set
  } from '@/utils/wxStorageHelper.js'
  export default {
    created() {
      this.getSystemInfo();
    },
    methods: {
      getSystemInfo() {
        try {
          let systemInfo = get("systemInfo");
          if (!systemInfo) {
            systemInfo = wx.getSystemInfoSync();
            set("systemInfo", systemInfo);
          }
          console.log("System information: ", JSON.parse(systemInfo));
        } catch (e) {
          // Do something when catch error
          console.log(`Get system info failed: ${e}`);
        }
      },
      getCacheLogs() {
        // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('app created and cache logs by setStorageSync')
      }
    }
  }
</script>

<style>
  .container {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 150rpx;
    box-sizing: border-box;
    position: relative;
    overflow-y: auto;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
