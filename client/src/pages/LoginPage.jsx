import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
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
    console.log(payload, "<<< payload login");
  };

  return (
    <div>
      <Container className="my-5 justify-content-center d-flex">
        <Card style={{ width: "50vw", top: "5vh", border: 0 }}>
          <Card.Body>
            <h1 className="text-center mb-5">Login</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={form.username}
                  name="username"
                  onChange={onChangeForm}
                />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  name="password"
                  onChange={onChangeForm}
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="px-4">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LoginPage;
