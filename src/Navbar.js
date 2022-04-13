import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={require('./img/logo.png')} title="Felföldi Gumi" alt="Felföldi Gumi" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">Bemutatkozás</Nav.Link>
                    <Nav.Link href="/contacts">Kapcsolat</Nav.Link>
                    <Nav.Link href="/services">Szolgáltatások</Nav.Link>
                    <Nav.Link href="/comments">Vélemények</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


/*  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">              
            <Link to='/'><img src={require('./img/logo.png')} title="Felföldi Gumi" alt="Felföldi Gumi" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/about" className="nav-link">Bemutatkozás</Link>
                    <Link to="/contacts" className="nav-link">Kapcsolat</Link>
                    <Link to="/services" className="nav-link">Szolgáltatások</Link>
                    <Link to="/comments" className="nav-link">Vélemények</Link>
                </div>
            </div>
        </div>
      </nav>
  )

  */
}

export default NavigationBar