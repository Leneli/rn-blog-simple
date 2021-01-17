import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARK } from "../types";
import { DATA } from '../../data'; // FIXME: test data

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA,
});

export const toggleBookmark = id => ({
  type: TOGGLE_BOOKMARK,
  payload: id,
});

export const createPost = post => {
  post.id = Date.now().toString();
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const removePost = id => ({
  type: REMOVE_POST,
  payload: id,
});
