import React from 'react';
import Slider from './Slider';
import './App.css';
import { Navbar, Nav, Container, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './Navbar';
import Articles from './Articles';
import Footer from './Footer';

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
                <Card.Body><p><em>Experience all the attractions that are waiting for you here!</em></p></Card.Body>
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
