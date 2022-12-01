import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/admin">Admin</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
