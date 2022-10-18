import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navibar.css'
function Navibar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='container1'>
          <Navbar.Brand href="#home" className='title2'>Karthik noveau</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
        
            </Nav>
            <Nav className='right_items'>
               
              <Nav.Link eventKey={1} href="" className='item'>
                Home
              </Nav.Link>
              <Nav.Link eventKey={2} href="#aboutme" className='item'>
                About
              </Nav.Link>
              <Nav.Link eventKey={3} href="#skills" className='item'>
                Skills
              </Nav.Link>
              <Nav.Link eventKey={4} href="#projects" className='item'>
                Projects
              </Nav.Link>
              <Nav.Link eventKey={5} href="#contact" className='item'>
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar