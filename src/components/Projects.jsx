import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projectList = [
    {
      title: 'HR Analytics Dashboard',
      description:
        'The HR Analytics Dashboard tracks workforce trends for 1,470 employees, showing a 16.12% attrition rate, led by Sales (56.12%) and R&D (38.82%). Most employees are in their 30s, with job satisfaction highest among Laboratory Technicians and Sales Executives. Attrition patterns vary by age, gender, and education, with Life Sciences and Medical fields showing the highest rates. Findings indicate a need for targeted retention strategies, especially in Sales, R&D, and specific demographic groups.',
      link: '',
      image: '/HR-Analytics.webp',
      techStack: ['Tableau','Data Analytics','Data Vizualisation','Graph generation','Dashboard Development'],
      tag: 'HR Analytics',
    },
    {
      title: 'Data Professional Survey Dashboard',
      description:
        'This Power BI dashboard analyzes survey data from data professionals, highlighting trends in salary, demographics, work/life balance, and tool usage. Insights reveal Python as the most popular language and Data Scientists as top earners. Features include salary breakdowns, geographic distribution, and interactive filters, enabling stakeholders to explore regional trends, compare roles, and make data-driven decisions.',
      link: 'https://github.com/Saidireddy25/Projects/blob/main/Power%20Bi%20Projects/README_Data_professional.md',
      image: '/Data professional survey.jpg',
      techStack: ['Power BI','MS Excel','Data Cleaning','Data Profiling','Data Wrangling','Data visualization','Git'],
      tag: 'Survey Analytics',
    },
    {
      title: 'Retail Sales Analytics',
      description:
        'This MS Excel dashboard provides a comprehensive analysis of retail sales from 2014 to 2018, covering cart value segmentation, discounting patterns, delivery logistics, and yearly trends. It highlights key metrics such as total sales, discounted product revenue, delivery times by shipping mode, and year-over-year growth. The dashboard enables stakeholders to optimize pricing, improve shipping efficiency, enhance customer retention, and make data-driven decisions to drive revenue growth.',
      link: 'https://github.com/Saidireddy25/Projects/blob/main/Power%20Bi%20Projects/README_Retail_sales.md',
      image: '/Retail Analytics.svg',
      techStack: ['MS Excel','Excel Charts','Dashboard','Reporting','Data Mining','Data cleaning'],
      tag: 'Sales Analytics',
    },
    {
      title: 'On Demand Q/A Bot',
      description:
        'Implemented a privacy-focused Q&A Bot for network security courses, showcasing problem-solving skills using Python and contributing to the open-source community. This initiative allowed for local storage and processing of the Q&A model and course details directly on users’ devices, prioritizing data privacy.The Q&A Bot project, a testament to these skills, achieved outstanding performance by consistently providing accurate and reliable responses to user queries, highlighting a successful integration of innovative solutions.',
      link: 'https://github.com/maturimonika/-OnDemand-Professor-Q-A-Bot-.git',
      image: '/qabot.png',
      techStack: ['Python', 'Hugging Face', 'GitHub Actions','Vector Search','Pinecone','HuggingFace Transformers','Scikit-learn'],
      tag: 'NLP',
    },
    {
      title: 'Age and Gender Detection',
      description:
        'Developed a real-time age group and gender prediction system using CNNs in TensorFlow and Keras, with OpenCV for facial detection and preprocessing. Leveraged transfer learning with VGG16 to boost accuracy across diverse demographics. Implemented image augmentation for robust training and evaluated model performance using accuracy, precision, recall, and confusion matrix. Deployed the model with webcam integration and a user-friendly UI for live biometric predictions.',
      link: 'https://github.com/prasanthi613/AGE-AND-GENDER-PREDICTION-PROJECT.git',
      image: '/agegenn.png',
      techStack: ['Python','TensorFlow', 'Keras', 'OpenCV','NumPy','Confusion Matrix','Scikit-learn','Matplotlib','Jupyter Notebook'],
      tag: 'AI/ML',
    },
    {
      title: 'Paradise Nursery',
      description:
        'A responsive e-commerce web application for browsing and purchasing houseplants. Built with HTML, CSS, and vanilla JavaScript, it features dynamic cart functionality with real-time total updates, modular code structure, and in-memory state management. Includes categorized product listings, interactive quantity adjustments, and responsive design for a smooth user experience across devices. Demonstrates strong frontend skills in DOM manipulation, event handling, and client-side logic.',
      link: 'https://github.com/prasanthi613/ParadiseNursery.git',
      image: '/plant.png',
      techStack: ['HTML', 'CSS', 'JavaScript','Responsive Web Design','Git','Modular JavaScript Structure','DOM Manipulation'],
      tag: 'UI Demo',
    },
  ];

  const visibleProjects = showMore ? projectList : projectList.slice(0, 3);

  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(to bottom right, #f3e8ff, #e9d5ff)',
        padding: '4rem 0',
      }}
    >
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#6b21a8' }}>
          Projects
        </h2>

        <Row xs={1} md={2} lg={3} className="g-5">
          {visibleProjects.map((project, idx) => (
            <Col key={idx}>
              <Card className="project-card glass-card position-relative h-100 overflow-hidden shadow-sm">
                {/* Tag */}
                <div className="position-absolute top-0 start-0 bg-purple text-white px-3 py-1 rounded-end">
                  {project.tag}
                </div>

                {/* Image */}
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />

                {/* Content */}
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      style={{ color: '#7e22ce', fontWeight: '600', fontSize: '1.2rem' }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text style={{ color: '#4b5563', minHeight: '80px' }}>
                      {project.description}
                    </Card.Text>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="rounded-pill px-3 border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    className="w-100 fw-semibold gradient-button"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-4">
         <Button
            variant="outline-primary"
            className="px-4 py-2 rounded-pill fw-semibold"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </Button>

        </div>
      </Container>
    </section>
  );
}
