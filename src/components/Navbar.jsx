import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand
          href="#home"
          className="typing-text gradient-text typing-effect"
        >
          &lt;Saidi/&gt;
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center text-md-start">
            <Nav.Link href="#about" className="px-3 text-purple">About Me</Nav.Link>
            <Nav.Link href="#skills" className="px-3 text-purple">Skills</Nav.Link>
            
            <Nav.Link href="#projects" className="px-3 text-purple">Projects</Nav.Link>
            
            
            <Nav.Link href="#contact" className="px-3 text-purple">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
