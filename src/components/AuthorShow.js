import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AuthorShow = () => {
  const [author, setAuthor] = useState("");
  const id = Number(useParams().id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setAuthor(response.data);
      });
  }, [id]);
  console.log(author);
  return (
    <div>
      <h1>Name- {author.name}</h1>
      <h2>Email- {author.email}</h2>
      <h3>
        Address- {author.address.street},{author.address.city}
      </h3>
    </div>
  );
};

export default AuthorShow;
