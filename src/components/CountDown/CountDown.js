import React from "react";
import "./countdown.scss";

const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const countDownDate = new Date("Oct 6, 2021 23:13:00").getTime();
    const difference = countDownDate - now;

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            "päivää": Math.floor(difference / (1000 * 60 * 60 * 24)),
            "tuntia": Math.floor((difference / (1000 * 60 * 60)) % 24),
            "minuuttia": Math.floor((difference / 1000 / 60) % 60),
            "sekuntia": Math.floor((difference / 1000) % 60)
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
            if (interval === "päivää" || interval === "tuntia" || interval === "minuuttia") {
                return "";
            }
        }

        return (
            <div className="space">
                <div className="font-wight">
                    {timeLeft[interval]}
                </div>
                <div>
                    {interval}
                </div>
            </div>
        );
    });


    return (
        <div className="d-flex flex-row" md="auto">
            {timerComponents.length ? timerComponents : ""}
        </div>
    );
}

export default CountDown;