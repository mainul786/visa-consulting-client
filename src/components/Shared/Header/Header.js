
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext/AuthContext';


const Header = () => {
  const { user, logOut } = useContext(UserContext);
  console.log(user?.uid);


  const handleLogOut = () =>{
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
            <Link to='/' className='text-decoration-none'>Home</Link>
            {
              user?.uid ?
                <>
                  <Link to='/' onClick={handleLogOut} className='text-decoration-none'>LogOut</Link>
                  <Link to='/login' className='text-decoration-none'>Login</Link>
                </>
                :
                 <Link to='/login' className='text-decoration-none'>Login</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;