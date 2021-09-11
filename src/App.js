import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './App.css';
import slide1 from './barcelone.jpg'
import slide2 from './london.jpg'
import slide3 from './Paris.jpg'
import { FaFly } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><FaFly></FaFly></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>  
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            width= "100%" height="500px"
          />
          <Carousel.Caption>
            <h3>Barcelone</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            width= "100%" height="500px"
          />

          <Carousel.Caption>
            <h3>London</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            width= "100%" height="500px"
          />

          <Carousel.Caption>
            <h3>Paris</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="txt" placeholder="Full Name" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>  
    </div>
  );
}

export default App;
