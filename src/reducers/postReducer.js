import postService from "../services/posts";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_POSTS":
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const initializePosts = () => {
  return async (dispatch) => {
    const posts = await postService.getAll();
    dispatch({
      type: "INIT_POSTS",
      data: posts,
    });
  };
};

export default postReducer;
