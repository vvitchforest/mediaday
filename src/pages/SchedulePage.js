import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";
import '../components/Calendar/calendar.scss'


const SchedulePage = () => {

  return (
    <Container className="pt-5 text-center">
      <h1 className="d-none d-sm-block display-5 pt-4 pb-2 my-calendar-title">MediaDay aikataulu</h1>
      <h2 className="d-none d-sm-block display-5 my-calendar-subtitle">23.03.2022, Karaportti 2</h2>
      <Row className="justify-content-md-center my-calendar-row">
        <Col md={12} lg={8} className="bg-light p-3 shadow rounded">
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
