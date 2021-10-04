import React from "react";

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const countDownDate = new Date("Mar 23, 2022 12:00:00").getTime();
  const difference = countDownDate - now;;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

const CountDown = () => {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  
    React.useEffect(() => {
      const id = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => {
        clearTimeout(id);
      };
    });
  
    const timerComponents = Object.keys(timeLeft).map(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      return (
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  
    return (
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  }

export default CountDown;