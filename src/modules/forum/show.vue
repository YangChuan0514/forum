<template>
  <div>
    <div class="show-forum">
      <div v-for="data in dataListDate.dataList" :key="data.id">
        <div class="line"></div>
        <Forum :data="data" class="forum-type" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent } from "vue";
import {
  getForumService,
  getCollectForumService,
  getUserForumService,
  getDianzanForum,
} from "../../services/forum/index";
import { onMounted } from "vue";
import Forum from "../../components/forum.vue";
export default defineComponent({
  props: {
    forumType: String,
  },
  components: {
    Forum,
  },
  setup(props, context) {
    const id = document.cookie.split("=")[1];
    const dataListDate: any = reactive({
      dataList: [],
    });
    onMounted(async () => {
      if (props.forumType === "userIdCt") {
        const res = await getCollectForumService({ userId: Number(id) });
        dataListDate.dataList = res.data;
      } else if (props.forumType === "userId") {
        const res = await getUserForumService({
          l: 10,
          o: 1,
          userId: Number(id),
        });
        dataListDate.dataList = res.data;
      } else if (props.forumType === "userIdDz") {
        const res = await getDianzanForum({ userId: Number(id) });
        dataListDate.dataList = res.data;
      } else {
        const res = await getForumService({ l: 10, o: 1 });
        dataListDate.dataList = res.data;
      }
    });
    return {
      dataListDate,
    };
  },
});
</script>
<style lang="scss" scoped>
.show-forum {
  .forum-type {
    padding: 10px;
  }
}

.line {
  height: 10px;
  background: rgb(233, 233, 233);
}
</style>
