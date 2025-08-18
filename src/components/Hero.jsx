import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Hero() {
  const taglines = [
    { text: "I am a Data Analyst", icon: "📊" },
    { text: "I help organizations with better decision making using data", icon: "💡" },
    { text: "I build interactive dashboards & visualizations", icon: "📈" },
    { text: "I build intelligent ML systems that learn from data.", icon: "🤖" },
    { text: "I innovate at the intersection of AI and business", icon: "⚡" }
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const typeLine = () => {
      const line = taglines[currentLine].text;
      typingInterval = setInterval(() => {
        setDisplayedText(line.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === line.length) {
          clearInterval(typingInterval);
          // Wait 1.5 seconds before next line
          setTimeout(() => {
            setCurrentLine((prev) => (prev + 1) % taglines.length);
          }, 1500);
        }
      }, 80); // typing speed
    };

    typeLine();
    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <section id="home" className="bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        {/* Heading */}
        <motion.h1
          className="display-4 mb-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Saidireddy 👋
        </motion.h1>

        {/* Profile Image */}
        <motion.img
          src="/profile.jpeg"
          alt="Saidi"
          className="rounded-circle mt-4 mb-3"
          style={{ width: "200px", height: "200px", objectFit: "cover", border: "3px solid #c084fc" }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Typing Taglines with Emoji at the end */}
        <div style={{ marginTop: "1rem", minHeight: "2.5rem" }}>
          <motion.p
            style={{
              display: "inline-block",
              color: "#c084fc",
              fontSize: "1.1rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transformOrigin: "center",
            }}
          >
            {displayedText}
            <span style={{ marginLeft: "0.3rem" }}>{taglines[currentLine].icon}</span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              style={{ display: "inline-block", marginLeft: "0.2rem" }}
            >
              |
            </motion.span>
          </motion.p>
        </div>
      </Container>
    </section>
  );
};