import React from "react";
import "./event.scss";
import "../styles.scss";
import { Col, Container, Row, Image, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";

import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";

import eventData from "../data/events.json";

const EventPage = () => {
  const { id } = useParams();

  const eventResult = eventData.events.find(({ videoUrl }) => videoUrl === id);

  if (!eventResult) {
    return <div>Event {id} was not found :(</div>;
  }

  return (
    <>
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-start mt-3 mx-5">
          <BackButton ></BackButton>
        </Col>
      </Row>
    </Container>
    <Container fluid="md">
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <div className="gradient-border">
            <Image
              src={eventResult?.speaker.image}
              alt="speaker"
              roundedCircle
              width="100%"
              height="100%"
              className="speaker-img p-3"
            />
          </div>
          <p className="mt-2 mb-0 fw-bold fs-5">{eventResult.speaker.name}</p>
          <p className="fst-italic fs-5">{eventResult.speaker.company}</p>
        </Col>
        <Col lg={9} className="event-info">
          <h1 className="display-5 mb-3 text-wrap">{eventResult.title}</h1>
          <p className="fs-4 fw-light">{eventResult?.description}</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <WaitingForStream
            startDate={eventResult.startDate}
            startTime={eventResult.startTime}
            endTime={eventResult.endTime}
          >
            {(streamHasStarted, streamHasEnded) => (
              <>
                {streamHasStarted && !streamHasEnded && (
                  <Video
                    url={eventResult.streamUrl}
                    type={eventResult.streamVideoType}
                  />
                )}
                {!streamHasStarted && (
                  <>
                    <Video
                      url="https://upload.wikimedia.org/wikipedia/commons/4/4d/Wikipedia_Edit_2014.webm"
                      type="video/webm"
                    />
                    <Row className="justify-content-center">
                      <Col>
                        <Alert className="blue-overlay mt-3 shadow p-3 mb-5 rounded">
                          Striimi alkaa {eventResult.startDate} klo.
                          {eventResult.startTime} , tässä promo video
                          (placeholder)
                        </Alert>
                      </Col>
                    </Row>
                  </>
                )}
                {streamHasEnded && (
                  <>
                    <Video
                      url={eventResult.archiveVideoUrl}
                      type={eventResult.archiveVideoType}
                    />
                    <Row className="justify-content-center">
                      <Col>
                        <Alert className="blue-overlay mt-5 shadow p-3 mb-5 rounded fs-5 fw-normal">
                          Striimi tapahtumasta {eventResult.title} on päättynyt{" "}
                          {eventResult.startDate} klo {eventResult.endTime},
                          tässä tallenne (placeholder)
                        </Alert>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}
          </WaitingForStream>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default EventPage;
