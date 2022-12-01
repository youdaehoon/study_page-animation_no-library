import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header>users page</Card.Header>
      <Card.Body>
        <Card.Title>users page</Card.Title>
        <Card.Text>
          it's users page, this page is designed for page routing animation
          <p>for dramatic change, this text will be repeated.</p>
          <p>for dramatic change, this text will be repeated.</p>
          <p>for dramatic change, this text will be repeated.</p>
          <p>for dramatic change, this text will be repeated.</p>
          <p>for dramatic change, this text will be repeated.</p>
        </Card.Text>
        <Button onClick={() => navigate("/")}>Go main</Button>
      </Card.Body>
    </Card>
  );
};

export default Users;
