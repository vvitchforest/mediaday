import { useEffect, useState } from 'react';

/**
 * Waiting for stream component
 * @param {string} startDate 
 * @param {string} startTime
 * @param {string} endTime
 * @param children  
 */


const WaitingForStream = ({startDate, startTime, endTime, children}) => {
    
    const [streamHasStarted, setStreamHasStarted] = useState(false);
    const [streamHasEnded, setStreamHasEnded] = useState(false);

    const [day, month, year] = startDate.split(".").map(Number);
    const [hour, minute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const eventStartDate = new Date(year, month - 1, day, hour, minute);
    const eventEndDate = new Date(year, month - 1, day, endHour, endMinute);

    const setStreamValue = () => {
        const now = new Date();

        setStreamHasStarted(eventStartDate <= now); // Jos tämä hetki > eventin alkamispäivä = event on alkanut
        setStreamHasEnded(eventEndDate <= now);   // Jos tämä hetki > eventin loppumispäivä = event on loppunut
    }

    useEffect(() => {
        setStreamValue();
        const interval = setInterval(setStreamValue, 1000);

        return () => {
            clearInterval(interval);
        }
    }, );

    return children(streamHasStarted, streamHasEnded);
}

export default WaitingForStream;