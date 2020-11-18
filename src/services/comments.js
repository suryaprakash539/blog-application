import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/comments";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
