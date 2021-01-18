import * as FileSystem from 'expo-file-system';
import DB from '../../db';
import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARK } from '../types';

export const loadPosts = () => async dispatch => {
  const posts = await DB.getPosts();

  dispatch({
    type: LOAD_POSTS,
    payload: posts,
  });
};

export const toggleBookmark = post => async dispatch => {
  await DB.updatePost(post);

  dispatch({
    type: TOGGLE_BOOKMARK,
    payload: post.id,
  });
};

export const createPost = post => async dispatch => {
  const { img, booked } = post;
  const fileName = img ? img.split('/').pop() : '';
  let newPath = '';

  try {
    if (fileName) {
      newPath = FileSystem.documentDirectory + fileName;
      await FileSystem.moveAsync({
        to: newPath,
        from: img,
      });
    }
  } catch (error) {
    console.log('Image move error', error);
  }

  const payload = { ...post, img: newPath, booked: booked ? 1 : 0 };
  const id = await DB.createPost(payload);

  payload.id = id;

  dispatch({
    type: CREATE_POST,
    payload,
  });
};

export const removePost = id => async dispatch => {
  await DB.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: id,
  });
};
