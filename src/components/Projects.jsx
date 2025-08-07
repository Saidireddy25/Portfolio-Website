import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projectList = [
    {
      title: 'Food Order Website',
      description:
        'Developed a Responsive Food Order Website named Eat Mela using frontend-technologies like HTML5, CSS3, and Bootstrap v4 and Bootstrap v5 for grid system and UI components.. It features a visually appealing with sections highlighting the menu, offers, healthy food options, delivery and payment methods and social media links. The website also includes interactive buttons, images, and icons to enhance the user experience with a modern UI, ensuring scalability and responsiveness across devices.',
      link: 'https://github.com/prasanthi613/Responsive-Food-Order-Website.git',
      image: '/foodorder.png',
      techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React','Responsive Web Design','Cross Browser Compatibility','UI/UX'],
      tag: 'UI Demo',
    },
    {
      title: 'Personal Blog Platform',
      description:
        'A full-stack blog app built with React, Express, and Supabase (PostgreSQL). Users can create, view, and delete posts in real-time. The frontend uses React Hooks and Axios; the backend exposes RESTful APIs that interact with Supabase for secure data storage. Designed with clean architecture, the project demonstrates full-stack development, API integration, and scalable design, with deployment-ready support for Vercel and Render.Showcases skills in client-server communication and scalable app architecture.',
      link: 'https://github.com/prasanthi613/personal-blog.git',
      image: '/blog.jpg',
      techStack: ['HTML','CSS','React', 'Axios','JavaScript','Node.js','Express.js','CORS','Supabase','dotenv','Git'],
      tag: 'Full Stack',
    },
    {
      title: 'Mobile Health Tracker',
      description:
        'Mobile Health Tracker App is a React Native app with Expo Router for file-based navigation and AsyncStorage for offline data persistence. It tracks water, steps, and sleep, features real-time summaries, input validation, and step trend charts using react-native-chart-kit. Built with React Hooks and native components, it’s optimized for mobile UX and ready for integration with health APIs and cloud services.The codebase is modular and scalable, supporting future features like auth, calendar filters, and health platform sync.',
      link: 'https://github.com/prasanthi613/health-tracker.git',
      image: '/healthtracker.jpg',
      techStack: ['React Native', 'Expo', 'Expo router','TypeScript','React Hooks','AsyncStorage','StyleSheet API'],
      tag: 'UI Demo',
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
