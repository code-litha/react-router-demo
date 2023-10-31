import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

function MovieCreatePage() {
  const [form, setForm] = useState({
    title: "",
    year: "",
  });

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = form;
    console.log(payload, "<<< payload movie create");
  };

  return (
    <div>
      <NavigationBar />
      <Container className="my-5 justify-content-center d-flex">
        <Card style={{ width: "50vw", border: 0 }}>
          <Card.Body>
            <h1 className="text-center mb-5">Create Movie</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input title"
                  value={form.title}
                  name="title"
                  onChange={onChangeForm}
                />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input year"
                  value={form.year}
                  name="year"
                  onChange={onChangeForm}
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="px-4">
                  Create
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default MovieCreatePage;
