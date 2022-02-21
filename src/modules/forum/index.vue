<template>
  <div>
    论坛
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      placement="top"
      class="forum-popover"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary" icon="plus" class="forum-type"></van-button>
      </template>
    </van-popover>
  </div>
  <show-forum></show-forum>
</template>
<script lang="ts">
export default defineComponent({
  components: {
    ShowForum,
  },
});
</script>
<script lang="ts" setup>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import ShowForum from "./show.vue";
const showPopover = ref(false);
const router = useRouter();
const actions = [
  { text: "论坛", icon: "add-o" },
  { text: "评论", icon: "music-o" },
  { text: "点赞", icon: "more-o" },
];
const onSelect = (val: { text: string; icon: string }) => {
  console.log(val.text);
  if (val.text === "论坛") {
    router.push({
      name: "addForum",
    });
  }
  if (val.text === "评论") {
    router.push({
      name: "",
    });
  }
  if (val.text === "点赞") {
    router.push({
      name: "",
    });
  }
  console.log("1111");
};
</script>
<style lang="scss" scoped>
.forum-type {
  position: absolute;
  bottom: 70px;
  right: 20px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
}
.forum-popover {
  right: 20px !important;
  bottom: 70px !important;
}
</style>
