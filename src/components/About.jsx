import { Container , Button } from "react-bootstrap";
import { motion } from "framer-motion";

// Animation variant for sliding from the right
const slideRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="py-5 bg-dark">
      <Container>
        <motion.div
          className="about-box mx-auto p-4 p-md-5 text-center"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(248, 241, 255, 0.1)",
            border: "2px solid rgba(192, 132, 252, 0.4)",
            borderRadius: "20px",
            maxWidth: "850px",
            boxShadow: "0 0 20px rgba(192, 132, 252, 0.2)",
            color: "#f1eaff",
            fontFamily: "Poppins, sans-serif"
          }}
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="fw-bold mb-4" style={{ color: "#c084fc" }}>
            Who Am I ?
          </h2>
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            I’m a data professional skilled in{" "}
            <strong>
              Data analysis, Predictive Modelling, Data Visualization, Data
              Manipulation, Data cleaning , Statistical Analysis
            </strong>
            , and <strong> Reporting & Dashboards</strong> using{" "}
            <strong>
              SQL, Python, MS Excel, Power Bi, Tableau, Machine Learning models,
              Artificial Intelligence
            </strong>{" "}
            helping business to make impactful Data-driven decisions. I am also
            experienced with cloud platforms like <strong>GCP, Azure</strong>,
            and <strong>AWS</strong>, and skilled in{" "}
            <strong>ETL, A/B testing, cohort analysis</strong>, and{" "}
            <strong>stakeholder reporting</strong>. I love turning messy data
            into clear stories that drive smarter decisions through clean,
            efficient, and impactful data analysis.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
