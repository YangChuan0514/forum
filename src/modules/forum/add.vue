<template>
  <div>
    <van-form @submit="onFailed">
      <van-cell-group inset>
        <van-field
          v-model="addForum.title"
          name="title"
          placeholder="请填写帖子标题..."
          :rules="[{ required: true, message: '请填写帖子标题' }]"
        />
        <van-field
          v-model="addForum.content"
          name="concent"
          placeholder="请填写帖子内容..."
          :rules="[{ required: true, message: '请填写帖子内容' }]"
        />
        <van-field name="uploader">
          <template #input>
            <van-uploader v-model="addForum.img" />
          </template>
        </van-field>
        <van-field label="选择话题:">
          <template #input>
            <van-checkbox-group v-model="addForum.type" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          发布
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { AddForum } from "../../type/forum/index";
import { addForumService } from "../../services/forum/index";
const img = ref([]);
const userId = useStore().state.userId;
const addForum: AddForum = reactive({
  userId,
  title: "",
  content: "",
  type: [],
  img: [],
  newTime: new Date(),
});

const onFailed = async () => {
  const res = await addForumService(addForum);
  console.log(res);
};
</script>
