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
      title: 'Film Rental Analysis',
      description:
        'This mini capstone project analyzes a film rental dataset to uncover rental patterns, identify popular films, evaluate store performance, and provide actionable business insights. Key findings include peak rental months (April and May), most rented films, busiest rental hours, and top-performing categories like Sports, Animation, Action, and Sci-Fi. The analysis leveraged SQL and Excel for data extraction and visualization, highlighting opportunities for targeted promotions, optimized stocking, and strategic marketing.',
      link: 'https://github.com/Saidireddy25/Projects/tree/main/Mini%20Capstone',
      image: '/Movie.webp',
      techStack: ['MS Excel','Data analysis','Data story telling'],
      tag: 'Film Industry',
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
