import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";
import "../components/Calendar/calendar.scss";


/**
 * A component for displaying calendar
 */
const SchedulePage = () => {
  return (
    <Container className="massive-margin text-center mb-5">
      <h1 className="main-heading-style">
        MediaDay aikataulu
      </h1>
      <h2 className="subheading-style mb-4">
        1.4.2022, Karaportti 2
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
