<template>
  <div id="app"></div>
  <van-tabbar v-model="active" @change="pageChange">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="forum" icon="search">论坛</van-tabbar-item>
    <van-tabbar-item name="tag" icon="setting-o" badge="5"
      >标签</van-tabbar-item
    >
    <van-tabbar-item
      name="mine"
      icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
      badge="20"
      >我的</van-tabbar-item
    >
  </van-tabbar>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const active = ref("home");
const router = useRouter();
const pageChange = () => {
  if (active.value === "home") {
    router.push({
      name: "homePage",
    });
  }
  if (active.value === "forum") {
    router.push({
      name: "forum",
    });
  }
  if (active.value === "tag") {
    router.push({
      name: "tag",
    });
  }
  if (active.value === "mine") {
    router.push({
      name: "my",
    });
  }
};
</script>

<style lang="scss">
.forum-popover {
  left: calc(100% - 105px) !important;
  top: calc(100% - 280px) !important;
  width: 100px;
  .van-popover__action {
    width: 80px;
    padding: 0px 0px;
	margin: auto;
  }
}
</style>
