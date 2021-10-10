import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calendar.scss";
import EventFetch from "../../EventFetch";

const Calendar = () => {

  const url = "/data/events.json";
  const eventData = EventFetch(url)

  const onMouseEnter = (target) => {
    target.event.setProp("backgroundColor", "#8986ba");
    target.event.setProp("textColor", "white");
  };

  const onMouseLeave = (target) => {
    target.event.setProp("backgroundColor", "rgba(194,183,218, 0.9)");
    target.event.setProp("textColor", "black");
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className="test">
        <p>
          <span className="my-event-title">
            {eventInfo.event.title}
          </span>
          <br></br>
          <span className="my-event-speaker">
            {eventInfo.event.extendedProps.speaker},{" "}
            {eventInfo.event.extendedProps.company}
          </span>
          <br></br>
          <span className="my-event-time">
            {eventInfo.event.start.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
            -
            {eventInfo.event.end.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
         
        </p>
      </div>
    );
  };

  return (
    <div className="calendar-view">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
        initialDate="2021-10-10"
        slotMinTime="10:00:00"
        slotMaxTime="18:00:00"
        nowIndicator={true}
        headerToolbar={false} 
        height={850}
        eventBackgroundColor="rgba(194,183,218, 0.9)"
        eventBorderColor="#c2b7da"
        eventTextColor="black"
        allDaySlot={false}
        dayHeaders={false}
        slotDuration="00:15:00"
        slotLabelInterval="00:60:00"
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
          className: 'time-label'
        }}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }}
        
       
        eventMouseEnter={onMouseEnter}
        eventMouseLeave={onMouseLeave}
        eventContent={renderEventContent}
        events={eventData?.events.map((data) => {
          const [day, month, year] = data.startDate.split(".").map(Number);
          const [startHour, startMinute] = data.startTime.split(":").map(Number);
          const [endHour, endMinute] = data.endTime.split(":").map(Number);

          return {
            title: data.title,
            start: new Date(year, month - 1, day, startHour, startMinute),
            end: new Date(year, month - 1, day, endHour, endMinute),
            url: `#/event/${data.videoUrl}`,
            description: data?.description,
            speaker: data.speaker.name,
            company: data.speaker.company,
            className: "my-event",
          };
        })}
      />
    </div>
  );
};

export default Calendar;
