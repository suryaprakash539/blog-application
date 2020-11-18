import commentService from "../services/comments";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_COMMENTS":
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const initializeComments = () => {
  return async (dispatch) => {
    const comments = await commentService.getAll();
    dispatch({
      type: "INIT_COMMENTS",
      data: comments,
    });
  };
};

export default commentReducer;
