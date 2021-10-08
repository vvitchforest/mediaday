import React from "react";
import "./event.scss";
import "../styles.scss";
import { Col, Container, Row, Image, Alert } from "react-bootstrap";


import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";

import eventData from "../data/events.json";

const StreamOnHomePage = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-start mt-3 mx-5">
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="mb-5">
          <Col>
            <Video
              url="http://195.148.104.124:1935/jakelu/irinan/playlist.m3u8"
              type="application/x-mpegurl"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StreamOnHomePage;