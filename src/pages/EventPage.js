import React, { useState, useEffect } from "react";
import "./event.scss";
import "../styles.scss";
import { Col, Container, Row, Image, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import Video from "../components/Video/Video";
import WaitingForStream from "../components/WaitingForStream/WaitingForStream";

//import eventData from "../data/events.json";

const EventPage = () => {
  document.title = "Tapahtumat";
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

  const eventPromoUrl = eventData?.promoVideo.promoVideoUrl;
  const eventPromoType = eventData?.promoVideo.promoVideoType;

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
          <Col className="d-flex flex-column align-items-center mb-0">
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
            <p className="text-style mt-2 mb-0 fw-bold">{eventResult.speaker.name}</p>
            <p className="text-style fst-italic">{eventResult.speaker.company}</p>
          </Col>
          <Col lg={9} className="event-info">
            <h1 className="my-2 heading-style">{eventResult.title}</h1>
            <p className="text-style fw-bold">
              {eventResult.startDate} klo. {eventResult.startTime}-
              {eventResult.endTime}
            </p>
            <p className="text-style pt-sm-2 fw-light">{eventResult?.description}</p>
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
                    <Row>
                      <Col>
                        <Video
                          url={eventResult.streamUrl}
                          type={eventResult.streamVideoType}
                        />
                      </Col>
                    </Row>
                  )}
                  {!streamHasStarted && (
                    <Row className="d-flex flex-column">
                      <Col lg={4} className="align-self-center">
                        <Alert className="text-style blue-overlay mt-1 shadow p-2 rounded text-center">
                          Striimi alkaa {eventResult.startDate} klo.{" "}
                          {eventResult.startTime}
                        </Alert>
                      </Col>
                      <Col>
                        <Video
                          url={eventPromoUrl}
                          type={eventPromoType}
                        />
                      </Col>
                    </Row>
                  )}
                  {streamHasEnded && (
                    <Row className="d-flex flex-column">
                      <Col lg={8} className="align-self-center">
                        <Alert className="text-style blue-overlay mt-1 shadow p-2 rounded text-center">
                          Videotallenne striimistä{" "}
                          <span className="fw-bold">{eventResult.title} </span>
                        </Alert>
                      </Col>
                      <Col>
                        <Video
                          url={eventResult.archiveVideoUrl}
                          type={eventResult.archiveVideoType}
                        />
                      </Col>
                    </Row>
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
