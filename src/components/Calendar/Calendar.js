import React from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calendar.scss";

import eventData from "../../data/events.json";

const Calendar = () => {
  const onMouseEnter = (target) => {
    target.event.setProp("backgroundColor", "magenta");
  };

  const onMouseLeave = (target) => {
    target.event.setProp("backgroundColor", "grey");
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{eventInfo.event.extendedProps.description}</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <div {...triggerHandler}>
              <b>{eventInfo.event.extendedProps.description}</b>
              <p>
                <i>{eventInfo.event.title}</i>
              </p>
            </div>
          )}
        </OverlayTrigger>
      </>
    );
  };

  return (
    <div className="calendar-view">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
        initialDate="2021-10-06"
        headerToolbar={false}
        slotMinTime="09:00:00"
        slotMaxTime="20:00:00"
        height={600}
        eventBackgroundColor="grey"
        eventTextColor="black"
        allDaySlot={false}
        dayHeaders={false}
        //slotDuration='00:15:00'
        slotLabelInterval="00:60:00"
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }}
        eventMouseEnter={onMouseEnter}
        eventMouseLeave={onMouseLeave}
        eventContent={renderEventContent}
        events={eventData.events.map((data) => {
          const [day, month, year] = data.startDate.split(".").map(Number);
          const [startHour, startMinute] = data.startTime
            .split(":")
            .map(Number);
          const [endHour, endMinute] = data.endTime.split(":").map(Number);

          return {
            title: data.title,
            start: new Date(year, month - 1, day, startHour, startMinute),
            end: new Date(year, month - 1, day, endHour, endMinute),
            url: `#/event/${data.videoUrl}`,
            description: data?.description,
          };
        })}
      />
    </div>
  );
};

export default Calendar;
