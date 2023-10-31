import { Card, Container, Button } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import NavigationBar from "../components/NavigationBar";

const UserDetailPage = () => {
  const { data, loading, errorMessage } = useFetch("users", 1);

  if (loading) return <Loading />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  return (
    <div>
      <NavigationBar />
      <Container className="d-flex justify-content-center">
        <Card style={{ maxWidth: "35vw", top: "10vw" }}>
          <Card.Img variant="top" src={data?.imageUrl} />
          <Card.Body>
            <Card.Title>
              <h2>{data?.name}</h2>
            </Card.Title>
            <Card.Text className="fst-italic">{data?.email}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end py-3">
            <Button variant="secondary">Go Back</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default UserDetailPage;
