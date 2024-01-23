import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>
            <img
              className='logo-img'
              width={95}
              src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='nav-item'>
              홈
            </Link>
            <Link to='/movies' className='nav-item'>
              영화
            </Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-danger'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
