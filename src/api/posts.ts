import axios from "./axios";

export const getPostsRequest = () => axios.get(`/posts`);

export const getPostRequest = (id: number) => axios.get(`/posts/${id}`);

export const createPostRequest = (post: any) => axios.post(`/posts`, post);

export const updatePostRequest = (id: number, task: any) =>
  axios.put(`/tasks/${id}`, task);

export const deletePostRequest = (id: number) => axios.delete(`/tasks/${id}`);
