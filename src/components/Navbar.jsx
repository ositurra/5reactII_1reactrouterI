import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar1 = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/">Home </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/contact">Contacto</Link>
                        </Nav.Link >
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}



export default Navbar1

