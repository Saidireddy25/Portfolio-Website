import { Container, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "MS Excel","SQL","MYSQL","PostgreSQL","Power BI","Tableau","Qlik Sense","Looker Studio",
    "Python","Pandas","Numpy","Matplotlib","Seaborn","Alteryx","R","VBA","SAP","ML Models", 
    "Machine learning","Scikit-Learn","TensorFlow","Hugging face transformers","Oracle",
    "AI","Linear Algebra","Gen AI","NLP","LLM","FastAPI","Apache","ETL","Git","JIRA","Confluence",
    "A/B Testing","Azure","GCP","AWS"
  ];

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.05 },
    }),
  };

  return (
    <section id="skills" className="py-5" style={{ background: "#fce6f0" }}>
      <Container className="text-center">
        <motion.h2
          className="mb-4 fw-bold"
          style={{ color: "#6b21a8" }}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Skills
        </motion.h2>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={badgeVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 rounded-pill border border-purple fw-medium"
                style={{ fontSize: "1rem", backgroundColor: "#f3e8ff" }}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
