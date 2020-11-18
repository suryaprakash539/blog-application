import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = ({ author }) => {
  console.log(author);
  return (
    <div>
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  );
};

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    console.log("surya");
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setAuthors(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Listing Authors - {authors.length}</h1>
      <ul>
        {authors.map((author) => (
          <li>
            <AuthorList key={author.id} author={author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
