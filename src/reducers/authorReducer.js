import authorService from "../services/authors";

const authorReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_AUTHORS":
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const initializeAuthors = () => {
  return async (dispatch) => {
    const authors = await authorService.getAll();
    dispatch({
      type: "INIT_AUTHORS",
      data: authors,
    });
  };
};

export default authorReducer;
