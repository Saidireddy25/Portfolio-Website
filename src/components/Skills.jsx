import { Container, Badge } from 'react-bootstrap';

export default function Skills() {
  const skills = [
    'C','Java','Python','SQL','MySQL','HTML', 'CSS', 'JavaScript', 'React', 'Angular','Bootstrap', 'Tailwind CSS',
    'Node.js', 'Express.js', 'Python', 'Flask','Vue','TypeScript','REST APIs',
    'MongoDB', 'PostgreSQL', 'MySQL','WordPress',
    'Git', 'Docker', 'Kafka', 'Kubernetes', 'Figma', 'GCP'
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
