import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const NavBar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="w-100" fluid>
      <Nav className="mx-auto">
        <Nav.Link href="#home">🍕 Home</Nav.Link>
        <Nav.Link href="#profile">📄 Profile</Nav.Link>

        {token ? (
          <Nav.Link href="#logout" onClick={() => setToken(false)}>🔒 Logout</Nav.Link>
        ) : (
          <Nav.Link href="#login" onClick={() => setToken(true)}>🔐 Login</Nav.Link>
        )}

        {!token && <Nav.Link href="#register">🔐 Register</Nav.Link>}
        <Nav.Link href="#Total">🛒 Total: ${total}</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
