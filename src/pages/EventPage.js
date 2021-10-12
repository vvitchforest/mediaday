import React, { useState, useEffect } from "react";
import "./event.scss";
import "../styles.scss";
import { Col, Container, Row, Image, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";

//import eventData from "../data/events.json";

const EventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState();

  const getEvents = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/data/events.json", options);
      const responseJson = await response.json();

      setEventData(responseJson);
    } catch (err) {
      console.log("error, no json", err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const eventResult = eventData?.events.find(({ videoUrl }) => videoUrl === id);
  console.log("event result", eventResult);

  if (!eventResult) {
    return <div>Event {id} was not found :(</div>;
  }

  return (
    <>
      <Container fluid="md" className="event-container">
        <Row>
          <Col className="mt-5"></Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex flex-column align-items-center mb-3">
            {eventResult.speaker.image ? (
              <div className="gradient-border">
                <Image
                  src={eventResult.speaker.image}
                  alt="speaker"
                  roundedCircle
                  width="100%"
                  height="100%"
                  className="speaker-img p-2"
                />
              </div>
            ) : (
              <div className="pt-5"></div>
            )}
            <p className="mt-2 mb-0 fw-bold fs-5">{eventResult.speaker.name}</p>
            <p className="fst-italic fs-5">{eventResult.speaker.company}</p>
          </Col>
          <Col lg={9} className="event-info">
            <h1 className="my-2 fs-1 text-wrap">{eventResult.title}</h1>
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
                            Striimi tapahtumasta {eventResult.title} on
                            päättynyt {eventResult.startDate} klo{" "}
                            {eventResult.endTime}, tässä tallenne (placeholder)
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
