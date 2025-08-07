import { Container, Button } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="py-5 bg-dark">
      <Container>
        <div
          className="about-box mx-auto p-4 p-md-5 text-center"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(248, 241, 255, 0.1)',
            border: '2px solid rgba(192, 132, 252, 0.4)',
            borderRadius: '20px',
            maxWidth: '850px',
            boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)',
            color: '#f1eaff',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <h2 className="fw-bold mb-4" style={{ color: '#c084fc' }}>
            Who Am I ?
          </h2>
          <p className="fs-5" style={{ lineHeight: '1.8' }}>
            I’m a full-stack developer skilled in <strong>Java, React, Node.js, Express, MongoDB, PostgreSQL</strong>, and <strong>Python</strong>, with experience building scalable web apps from front to back. I craft responsive UIs with <strong>HTML, CSS, JavaScript, Bootstrap</strong>, and <strong>Tailwind</strong>, and develop secure APIs and microservices. I’m also experienced with <strong>Docker, Git, CI/CD pipelines, Kafka</strong>, and deployment tools like <strong>Vercel</strong> and <strong>GCP</strong>. I love solving real-world problems through clean, efficient, and impactful code.
          </p>

          {/* 📄 Download Resume Button */}
          <div className="mt-4">
            <Button
              href="/Lakshmi_resume.pdf"
              download="Lakshmi_Resume.pdf"
              variant="outline-light"
              className="px-4 py-2 rounded-pill fw-semibold"
              style={{
                borderColor: '#c084fc',
                color: '#c084fc',
                transition: '0.3s',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#c084fc';
                e.target.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#c084fc';
              }}
            >
              📄 Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
