import React from "react";
import "./event.css";
import { Col, Container, Row, Image } from "react-bootstrap";
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
    <Container fluid="md">
      <Row>
        <Col>
          <h1 className="display-4">{eventResult.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Striimi alkaa {eventResult.startDate} klo. {eventResult.startTime}{" "}
          </h2>
        </Col>
      </Row>
      <Row>
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
                    <h2>
                      Striimi alkaa joskus myöhemmin, tässä promo video
                      (placeholder atm)
                    </h2>
                    <Video
                      url="https://upload.wikimedia.org/wikipedia/commons/4/4d/Wikipedia_Edit_2014.webm"
                      type="video/webm"
                    />
                  </>
                )}
                {streamHasEnded && (
                  <>
                    <h2>
                      Striimi on päättynyt, tässä video
                      tallenne (placeholder atm)
                    </h2>
                    <Video
                      url={eventResult.archiveVideoUrl}
                      type={eventResult.archiveVideoType}
                    />
                  </>
                )}
              </>
            )}
          </WaitingForStream>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Image
            src={eventResult.speaker.image}
            alt="speaker"
            roundedCircle
            width="100"
            height="100"
            className="speaker-img"
          />
          <p>{eventResult.speaker.name}</p>
          <p>{eventResult.speaker.company}</p>
        </Col>
        <Col lg={9} className="d-flex align-items-center">
          <p>{eventResult.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EventPage;
