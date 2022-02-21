<template>
  <div>展示论坛</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getForumService } from "../../services/forum/index";
export default defineComponent({
  async created() {
    const res = await getForumService();
    console.log(res);
  },
});
</script>
<style lang="scss" scoped></style>
