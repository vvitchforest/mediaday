import React from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import eventData from "../../data/events.json";

const Calendar = () => (
  <div className="calendar-view">
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGrid"
      headerToolbar={false}
      //initialDate= "2021-09-21"
      slotMinTime="10:00:00"
      slotMaxTime="20:00:00"
      height={700}
      views={{
        timeGrid: {
          visibleRange: {
            start: "2021-10-04",
            end: "2021-10-07",
          },
        },
      }}

      events={eventData.events.map((data) => {
        const [day, month, year] = data.startDate.split(".").map(Number);
        const [startHour, startMinute] = data.startTime.split(":").map(Number);
        const [endHour, endMinute] = data.endTime.split(":").map(Number);
        

        return {
          title: data.title,
          start: new Date(year, month - 1, day, startHour, startMinute),
          end: new Date(year, month - 1, day, endHour, endMinute),
          url: `#/event/${data.videoUrl}`,
        };
      })}
    />
  </div>
);

export default Calendar;
