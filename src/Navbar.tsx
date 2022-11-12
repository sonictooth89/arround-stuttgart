import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navi(){
    return (
        <Navbar bg="secondary" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beutiful Stuttgart Land</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">City</Nav.Link>
              <Nav.Link href="#link">Vineyards</Nav.Link>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/sonictooth89">My GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://www.wetteronline.de/wetter/waiblingen">Weather Forecast</NavDropdown.Item>
                <NavDropdown.Item href="https://www.stuttgarter-zeitung.de/stuttgart">Stuttgarter Zeitung</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

     


export default Navi;