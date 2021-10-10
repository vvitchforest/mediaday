import React from "react";
import "../../pages/event.scss";
import "../../styles.scss";
import { Col, Container, Row} from "react-bootstrap";
import Video from "../Video/Video";
import EventFetch from "../../EventFetch";

const StreamOnHomePage = () => {

  const url = "/data/events.json";
  const eventResult = EventFetch(url);
  console.log("event result mikä oot", eventResult);

  const isEventNow = (startTime, endTime, startDate) => {
    const [day, month, year] = startDate.split(".").map(Number); 
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
  
    const streamStart = new Date(year, month - 1, day, startHour, startMinute);
    const streamEnd = new Date(year, month - 1, day, endHour, endMinute);
    const now = new Date();

    return (
      now.getTime() >= streamStart.getTime() &&
      now.getTime() <= streamEnd.getTime()
    ); 
  };

  const ongoingEvent = eventResult?.events.find(({ startTime, endTime, startDate }) => isEventNow(startTime, endTime, startDate));
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-start mt-3 mx-5"></Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="mb-5">
          <Col>
            {ongoingEvent ? (
              <>
                <Video
                  url={ongoingEvent.streamUrl}
                  type={ongoingEvent.streamVideoType}
                />
                <h3>{ongoingEvent.title}</h3>
              </>
            ) : (
              <Video
                url="https://upload.wikimedia.org/wikipedia/commons/4/4d/Wikipedia_Edit_2014.webm"
                type="video/webm"
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StreamOnHomePage;
