import { Navbar, Container, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Hacktiv8</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item className="mx-2">Home</Nav.Item>
            <Nav.Item className="mx-2">Movies</Nav.Item>
            <Nav.Item className="mx-2">Add Movie</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
