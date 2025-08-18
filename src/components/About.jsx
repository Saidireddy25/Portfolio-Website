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
            I’m a data professional skilled in <strong>Data analysis, Predictive Modelling, Data Visualization, Data Manipulation, Data cleaning , Statistical Analysis  </strong>, and <strong> Reporting & Dashboards</strong> using <strong> SQL, Python, MS Excel, Power Bi, Tableau, Machine Learning models, Artificial Intelligence </strong> helping business to make impactful Data-driven decisions. I am also experienced with cloud platforms like <strong>GCP, Azure</strong>, and <strong>AWS</strong>, and skilled in <strong>ETL, A/B testing, cohort analysis</strong>, and <strong>stakeholder reporting</strong>. I love turning messy data into clear stories that drive smarter decisions through clean, efficient, and impactful data analysis.
          </p>
        </div>
      </Container>
    </section>
  );
}
