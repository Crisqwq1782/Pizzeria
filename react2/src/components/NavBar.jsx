import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100" fixed="top">
      <Nav className="mx-auto">
        <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
        <Nav.Link as={Link} to="/profile">📄 Profile</Nav.Link>

        {token ? (
          <Nav.Link as={Link} to="/" onClick={() => setToken(false)}>
            🔒 Logout
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login" onClick={() => setToken(true)}>
            🔐 Login
          </Nav.Link>
        )}

        {!token && <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>}
        <Nav.Link as={Link} to="/cart">🛒 Total: ${total}</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
