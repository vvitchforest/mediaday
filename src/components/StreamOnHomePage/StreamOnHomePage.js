import React, { forwardRef } from "react";
import "../../pages/event.scss";
import "../../styles.scss";
import { Col, Row } from "react-bootstrap";
import Video from "../Video/Video";
import EventFetch from "../../EventFetch";
import { BiBroadcast } from "react-icons/bi";

/**
 * Renders <StreamOnHomePage /> component
 */

// eslint-disable-next-line no-empty-pattern
const StreamOnHomePage = forwardRef(({}, ref) => {
  const url = "/data/events.json";
  const eventResult = EventFetch(url);

  /**
   * A function that checks whether the current time is between start time and end time parameters and if current date matches start date
   * @param {string} startTime
   * @param {string} endTime
   * @param {string} startDate
   * @returns boolean
   */

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

  const eventPromoUrl = eventResult?.promoVideo.promoVideoUrl;
  const eventPromoType = eventResult?.promoVideo.promoVideoType;

  return (
    <>
      <Row className="mb-5" ref={ref}>
        <Col>
          {ongoingEvent ? (
            <>
              <h2 className="heading-style">{ongoingEvent.title} </h2>
              <span className="subheading-style">
                {ongoingEvent.startDate}{" "}
              </span>
              <span className="subheading-style">
                {ongoingEvent.startTime}-{ongoingEvent.endTime}
              </span>
              <div className="custom-badge-container d-flex justify-content-center rounded my-2">
                <div className="custom-badge text-center m-1 p-1">
                  Live <BiBroadcast />
                </div>
              </div>

              <Video
                url={ongoingEvent.streamUrl}
                type={ongoingEvent.streamVideoType}
              />
            </>
          ) : (
            <>
              <h2 className="main-heading-style text-center pb-4">
                MEDIADAY 1.4.2022
              </h2>
              <Video url={eventPromoUrl} type={eventPromoType} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
});

export default StreamOnHomePage;
