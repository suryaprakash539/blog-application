import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const AuthorList = ({ author }) => {
  // console.log(author);
  return (

    <div class="author">
      <Link to={`/authors/${author.id}`}>{author.name}</Link>

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
    <div class="author-list">
      <h1>Listing Authors - {authors.length}</h1>
      <ListGroup>
        {authors.map((author) => (
          <ListGroup.Item key={author.id} variant="warning">
            <AuthorList key={author.id} author={author} />
            {/* <Link to={`/authors/${author.id}`}>{author.name}</Link> */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Authors;
