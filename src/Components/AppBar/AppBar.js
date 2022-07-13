import './AppBar.css';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

export default function AppBar() {
  return (
    <header className="header">
      <Container className="container header_container">
        <Navigation />
      </Container>
    </header>
  );
}
