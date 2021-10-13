import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";
import "../components/Calendar/calendar.scss";

const SchedulePage = () => {
  return (
    <Container className="massive-margin text-center mb-5">
      <h1 className="d-none d-sm-block main-heading-style">
        MediaDay aikataulu
      </h1>
      <h2 className="d-none d-sm-block subheading-style">
        23.03.2022, Karaportti 2
      </h2>
      <Row className="justify-content-md-center my-calendar-row">
        <Col md={12} lg={8} className="bg-light p-3 shadow rounded">
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
