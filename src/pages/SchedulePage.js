import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";


const SchedulePage = () => {

  return (
    <Container className="pt-5 text-center">
      <h1 className="display-2 py-5">Event schedule</h1>
      <Row className="justify-content-md-center">
        <Col md={12} lg={6} className="bg-light p-3 shadow rounded">
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
