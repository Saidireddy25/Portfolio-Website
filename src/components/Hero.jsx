import { Container } from 'react-bootstrap';

export default function Hero() {
  return (
    <section id="home" className="bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        <h1 className="display-4 mb-3">Hi, I'm Saidireddy 👋</h1>
       <p
  className="lead fw-semibold fst-italic text-center px-3"
  style={{
    fontSize: '1.1rem',
    lineHeight: '1.6',
    maxWidth: '90%',
    margin: '0 auto',
  }}
>
  I help organizations with better decision making using data.
</p>


        <img
          src="/profile.jpeg"
          alt="Saidi"
          className="rounded-circle mt-4"
          style={{ width: '200px', height: '200px', objectFit: 'cover', border: '3px solid #c084fc' }}
        />
      </Container>
    </section>
  );
}


