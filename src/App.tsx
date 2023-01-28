import Slider from './components/Slider/Slider';
import './App.css';
import { Container, Card, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './components/Navbar/Navbar';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navi />
      </header>

      <main>
      <Container>

        <Row className="px-0 my-4">
          <Slider/>
        </Row>

        <Row>
         <div id='motto'>
            <Card className='text-center bg-info text-white my-2 py-0'>
                <Card.Body><p><em>“Challenges are what make life interesting and overcoming them is what makes life meaningful.” – Joshua J. Marine</em></p></Card.Body>
            </Card>
         </div>
        </Row>

        <Row>
          <div className='text-center shadow-sm'>
            <Articles/>
          </div>
        </Row>

    </Container>
      </main>

      <footer className="py-5 my-5 bg-secondary">
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
