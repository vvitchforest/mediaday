import { useState, useEffect } from 'react';

const EventFetch = (url) => {
  const [eventData, setEventData] = useState();

  /**
   * Fetches data from json
   * 
   * @returns {Object}
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const response = await fetch(url, options);
        const json = await response.json();
        setEventData(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [url]);

  return eventData;
};

export default EventFetch;


