import React from "react";
import "../../pages/event.scss";
import "../../styles.scss";
import { Col, Container, Row, Alert, Badge } from "react-bootstrap";
import Video from "../Video/Video";
import EventFetch from "../../EventFetch";
import { BiBroadcast } from "react-icons/bi";

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

  const ongoingEvent = eventResult?.events.find(
    ({ startTime, endTime, startDate }) =>
      isEventNow(startTime, endTime, startDate)
  );

  const eventPromoUrl = eventResult?.events[0].promoVideoUrl;
  const eventPromoType = eventResult?.events[0].promoVideoType;

  return (
    <>
      <Row className="mb-5">
        <Col>
          {ongoingEvent ? (
            <>
              <div className="p-3 mb-2 main-video-title-container">
                <h2 className=" d-flex justify-content-between">
                  {ongoingEvent.title}{" "}
                  <span className="custom-badge-container d-flex justify-content-center rounded">
                    <span className="custom-badge m-1 p-2">
                      Live now <BiBroadcast />
                    </span>
                  </span>
                </h2>
                <span className="ongoing-event-date">
                  {ongoingEvent.startDate}{" "}
                </span>
                <span className="ongoing-event-time">
                  {ongoingEvent.startTime}-{ongoingEvent.endTime}
                </span>
              </div>
              <Video
                url={ongoingEvent.streamUrl}
                type={ongoingEvent.streamVideoType}
              />
            </>
          ) : (
            <Video url={eventPromoUrl} type={eventPromoType} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default StreamOnHomePage;
