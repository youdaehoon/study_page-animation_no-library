import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Header>main page</Card.Header>
      <Card.Body>
        <Card.Title>main page</Card.Title>
        <Card.Text>
          it's main page, this page is designed for page routing animation
        </Card.Text>
        <Button onClick={() => navigate("/users")}>Go users</Button>
      </Card.Body>
    </Card>
  );
};

export default Main;
