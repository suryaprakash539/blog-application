import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const AuthorList = ({ author }) => {
  // console.log(author);
  return (
    <div className="author">
      <Link to={`/authors/${author.id}`}>Show More</Link>
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
    <div className="author-list">
      <h1>Listing Authors - {authors.length}</h1>
      <Container>
        <Row>
          {authors.map((author) => (
            <Col key={author.name} xs="4">
              <Card className="card" style={{ width: "18rem", margin: "2rem" }}>
                <Card.Header>
                  {" "}
                  Name-<h4>{author.name.slice(0, 15)}</h4>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Email- {author.email.slice(0, 8)} </Card.Title>
                  <Card.Text>
                    <AuthorList key={author.id} author={author} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Authors;
