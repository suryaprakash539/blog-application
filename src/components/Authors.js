import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AuthorList = ({ author }) => {
  // console.log(author);
  return (
    <div className="author-name">
      <Link style={{ textDecoration: "none" }} to={`/authors/${author.id}`}>
        <p>{author.name}</p>
      </Link>
    </div>
  );
};

const Authors = () => {
  const authors = useSelector((state) => state.authors);
  // const [authors, setAuthors] = useState([]);
  // useEffect(() => {
  //   // console.log("surya");
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     setAuthors(response.data);
  //   });
  // }, []);
  return (
    <div>
      <h1>Listing Authors - {authors.length}</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <AuthorList key={author.id} author={author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
