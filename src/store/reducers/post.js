import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARK } from '../types';

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

export const postReducer = (state = initialState, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case LOAD_POSTS: {
      const allPosts = actionPayload || [];
      const bookedPosts = allPosts.filter(post => post.booked);
      return { ...state, allPosts, bookedPosts };
    };

    case TOGGLE_BOOKMARK: {
      const bookmarkId = actionPayload;
      const allPosts = state.allPosts.map(post => {
        if (post.id === bookmarkId) post.booked = !post.booked;
        return post;
      });
      const bookedPosts = allPosts.filter(post => post.booked);

      return { ...state, allPosts, bookedPosts };
    }

    case REMOVE_POST: {
      const removedPostId = actionPayload;
      const allPosts = state.allPosts.filter(post => post.id !== removedPostId);
      const bookedPosts = allPosts.filter(post => post.booked);

      return { ...state, allPosts, bookedPosts };
    }

    case CREATE_POST: {
      const post = actionPayload;
      return { ...state, allPosts: [{ ...post }, ...state.allPosts] };
    }
  
    default:
      return state;
  }
};
