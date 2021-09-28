import React, { useEffect, useState } from 'react';

const WaitingForStream = ({startDate, startTime, children}) => {
    const [streamHasStarted, setStreamHasStarted] = useState(false);

    const [day, month, year] = startDate.split(".").map(Number);
    const [hour, minute] = startTime.split(":").map(Number);

    const eventDateObject = new Date(year, month - 1, day, hour, minute);

    const setStreamValue = () => {
        setStreamHasStarted(eventDateObject <= new Date());
    }

    useEffect(() => {
        setStreamValue();
        const interval = setInterval(setStreamValue, 1000);

        return () => {
            clearInterval(interval);
        }
    }, );

    return children(streamHasStarted);
}

export default WaitingForStream;
