import axios from "axios";

const URL = "http://localhost:5000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost api", error);
  }
};
export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling fetching Post api", error);
  }
};
export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling fetching Post api", error);
  }
};
export const updatePost = async (id, post) => {
  try {
    let response = await axios.post(`${URL}/update/${id}`, post);
    return response.data;
  } catch (error) {
    console.log("Error while calling updting Post api", error);
  }
};
export const deleteBlog = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleting Post api", error);
  }
};
export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling picture Post api", error);
  }
};
