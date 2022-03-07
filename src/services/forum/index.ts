import axios from "axios";
import { AddForum } from "../../type/forum/index";
//添加论坛
export async function addForumService(obj: AddForum) {
  let data = {};
  await axios.post("/api/addForum", obj).then((res) => {
    data = res;
  });
  return data;
}
//获取所有论坛
export async function getForumService(obj: { l: number; o: number }) {
  let data = {};
  await axios.post("/api/getForumAll", obj).then((res) => {
    data = res;
  });
  return data;
}
//获取某一个论坛
export async function getForumIdService(id: number) {
  let data = {};
  await axios.post("/api/getForumId", { id: id }).then((res) => {
    data = res;
  });
  return data;
}
//获取某个人的论坛
export async function getUserForumService(obj: any) {
  let data = {};
  await axios.post("/api/getUserForum", obj).then((res) => {
    data = res;
  });
  return data;
}

export async function getDianzanForum(obj: any) {
  let data = {};
  await axios.post("/api/getDianzanForum", obj).then((res) => {
    data = res;
  });
  return data;
}
//取消点赞
export async function deletDZService(obj: {
  userId: number;
  dzForumId: number;
}) {
  let data = {};
  await axios.post("/api/deleteDianzan", obj).then((res) => {
    data = res;
  });
  return data;
}
// 点赞
export async function addDZService(obj: { userId: number; dzForumId: number }) {
  let data = {};
  await axios.post("/api/addDianzan", obj).then((res) => {
    data = res;
  });
  return data;
}
// 获取该用户所有点赞
export async function getDZService(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getDianzan", obj).then((res) => {
    data = res;
  });
  return data;
}

// 收藏
export async function addCollectService(obj: {
  userId: number;
  collectForumId: number;
}) {
  let data = {};
  await axios.post("/api/addCollect", obj).then((res) => {
    data = res;
  });
  return data;
}
// 删除收藏
export async function deleteCollectService(obj: {
  userId: number;
  collectForumId: number;
}) {
  let data = {};
  await axios.post("/api/deleteCollect", obj).then((res) => {
    data = res;
  });
  return data;
}
//获取用户收藏
export async function getCollectService(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getCollect", obj).then((res) => {
    data = res;
  });
  return data;
}
//获取用户收藏论坛
export async function getCollectForumService(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getCollectForum", obj).then((res) => {
    data = res;
  });
  return data;
}
//添加评论
export async function addCommentService(obj: {
  userId: number;
  commentForumId: number;
  commentContent: string;
  commentImg: string;
  newTime: number;
}) {
  let data = {};
  await axios.post("/api/addComment", obj).then((res) => {
    data = res;
  });
  return data;
}
//修改评论
export async function updateCommentService(obj: {
  commentId: number;
  commentContent: string;
  commentImg: string;
  newTime: number;
}) {
  let data = {};
  await axios.post("/api/updateComment", obj).then((res) => {
    data = res;
  });
  return data;
}
//删除评论
export async function deleteCommentService(obj: { commentId: number }) {
  let data = {};
  await axios.post("/api/deleteComment", obj).then((res) => {
    data = res;
  });
  return data;
}
//获取用户评论
export async function getCommentService(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getComment", obj).then((res) => {
    data = res;
  });
  return data;
}
//关注我的
export async function getUserAttentionTMessage(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getUserAttentionTMessage", obj).then((res) => {
    data = res;
  });
  return data;
}
// 给我点赞的
export async function getUserDianzanNum(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getUserDianzanNum", obj).then((res) => {
    data = res;
  });
  return data;
}
// 我关注的
export async function getUserAttentionMessage(obj: { userId: number }) {
  let data = {};
  await axios.post("/api/getUserAttentionMessage", obj).then((res) => {
    data = res;
  });
  return data;
}