import { Container, Row, Col } from 'react-bootstrap';
import { BsEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import '../index.css';

export default function Contact() {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-purple">Get in Touch</h2>
        <p className="text-center mb-5 text-muted" style={{ fontSize: '1.1rem' }}>
          I’m currently open to opportunities, collaborations, or just a tech chat. Feel free to reach out!
        </p>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={4} className="mb-4">
            <a href="mailto:saidreddyk2545@gmail.com" className="contact-link">
              <BsEnvelopeFill size={28} className="mb-2" />
              <div>saidreddyk2545@gmail.com</div>
            </a>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <a href="https://www.linkedin.com/in/saidireddyk45/" target="_blank" rel="noreferrer" className="contact-link">
              <BsLinkedin size={28} className="mb-2" />
              <div></div>LinkedIn
            </a>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <a href="https://github.com/Saidireddy25" target="_blank" rel="noreferrer" className="contact-link">
              <BsGithub size={28} className="mb-2" />
              <div>GitHub</div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
