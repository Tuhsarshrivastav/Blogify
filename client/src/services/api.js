import axios from "axios";

const URL = "http://localhost:5000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost api", error);
  }
};
export const getAllPosts = async () => {
  try {
    let response = await axios.get(`${URL}/posts`);
    return response.data;
  } catch (error) {
    console.log("Error while calling fetching Post api", error);
  }
};
