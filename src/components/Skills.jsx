import { Container, Badge } from 'react-bootstrap';

export default function Skills() {
  const skills = [
    'MS Excel','SQL','MYSQL','PostgreSQL','Power BI','Tableau','Quck Sense','Looker Studio',
    'Python','Pandas','Numpy','Matplotlib','Seaborn','Alteryx','R','VBA','SAP','ML Models', 
    'Machine learning','Scikit-Learn','TensorFlow','Hugging face transformers','Oracle',
    'AI','Linear Algebra','Gen AI','NLP','LLM','FastAPI','Apache','ETL','Git','JIRA','Confluence',
    'A/B Testing','Azure','GCP','AWS'
  ];

  return (
    <section id="skills" className="py-5" style={{ background: '#fce6f0' }}>
      <Container className="text-center">
        <h2 className="mb-4 fw-bold" style={{ color: '#6b21a8' }}>Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              bg="light"
              text="dark"
              className="px-3 py-2 rounded-pill border border-purple fw-medium"
              style={{ fontSize: '1rem', backgroundColor: '#f3e8ff' }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
