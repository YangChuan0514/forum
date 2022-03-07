<template>
  <div>
    首页
    <div>
      <input
        type="file"
        name="upFile"
        id="upFile"
        @change="changeFile($event)"
      />
      <input
        type="button"
        name="开始上传"
        value="开始上传"
        @click="uploadFile()"
      />
      <img v-if="coverUrl" :src="coverUrl" alt="封面" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import * as qiniu from "qiniu-js";
const coverUrl = ref("");
let file = "";
const changeFile = (e) => {
  //   获取文件
  console.log(e.target.files[0])
  file = e.target.files[0];
};


</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  background-color: #f4f5f7;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
