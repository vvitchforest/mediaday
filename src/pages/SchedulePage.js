import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";


const SchedulePage = () => {

  return (
    <Container>
      <h1 className="display-2">Event schedule</h1>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
