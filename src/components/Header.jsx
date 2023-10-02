import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

function Header() {
  return (
    <>
        <Navbar expand="lg" className="bg-primary ">
          <Container>
            <Navbar.Brand href="#home">BookmyShow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
                <Nav.Link href="#search">
                  <input className='search rounded' placeholder='Search for Movies,Events,Plays,Sports and Activities'  type='search'></input>
                </Nav.Link>
                <NavDropdown title="Location" id="basic-nav-dropdown" className='navd text-light'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <button  type="button" className="navl btn btn-danger">Sign in</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='dpart bg-dark p-1 d-flex flex-row justify-content-between text-light'>
          <div className='first col-lg-6 col-md-6 d-flex flex-row flex-wrap'>
            <h6 className='mr-2 mb-2'>Movies</h6>
            <h6 className='mr-2 mb-2'>Streams</h6>
            <h6 className='mr-2 mb-2'>Events</h6>
            <h6 className='mr-2 mb-2'>Plays</h6>
            <h6 className='mr-2 mb-2'>Sports</h6>
          </div>
          <div className='second col-lg-6 col-md-6 d-flex flex-row flex-wrap'>
            <h6 className='mr-2 mb-2'>Activities</h6>
            <h6 className='mr-2 mb-2'>ListYourShows</h6>
            <h6 className='mr-2 mb-2'>Corporates</h6>
            <h6 className='mr-2 mb-2'>Offers</h6>
            <h6 className='mr-2 mb-2'>GiftCards</h6>
          </div>
        </div>
    </>
  )
}

export default Header;
