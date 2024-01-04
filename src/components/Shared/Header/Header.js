
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext/AuthContext';


const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error));
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Visa & Consulting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center justify-content-center">
            
            <Nav.Link><Link to='/' className='text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/blog' className='text-decoration-none'>Blog</Link></Nav.Link>
            {
              user?.uid ?
                <>
                  <Nav.Link> <Link to='/reviews' className='text-decoration-none'>My reviews</Link></Nav.Link>
                  <Nav.Link> <Link to='/addService' className='text-decoration-none'>Add service</Link></Nav.Link>
                  <Nav.Link> <Link to='/' onClick={handleLogOut} className='text-decoration-none'>LogOut</Link> </Nav.Link>
                </>
                :
                <>
                 <Nav.Link> <Link to='/login' className='text-decoration-none'>Login</Link></Nav.Link>
                 <Nav.Link><Link to='/signup' className='text-decoration-none'>SignUp</Link></Nav.Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;