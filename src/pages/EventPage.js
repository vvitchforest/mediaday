import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
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
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">{eventResult.title}</h1>
          </Col>
          <Col>????????</Col>
        </Row>
        <Row>
          <Col lg={9}>
            <WaitingForStream
              startDate={eventResult.startDate}
              startTime={eventResult.startTime}
            >
              {(streamHasStarted) => (
                <>
                  {streamHasStarted && (
                    <Video
                      url={eventResult.streamUrl}
                      type={eventResult.streamVideoType}
                    />
                  )}
                  {!streamHasStarted && (
                    <h2>Striimi alkaa joskus myöhemmin (countdown?)</h2>
                  )}
                </>
              )}
            </WaitingForStream>
          </Col>
          <Col>
            Alkaa päivänä: {eventResult.startDate}
            <br />
            Alkaa klo: {eventResult.startTime}
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      {/*  */}
    </div>
  );
};

export default EventPage;
