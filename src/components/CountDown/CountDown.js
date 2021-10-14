import React from "react";
import "./countdown.scss";
import {Container, Row} from "react-bootstrap";

/**
 * Calculates time
 * 
 * @returns {Object} how much time is left
 */
const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const countDownDate = new Date("Apr 01, 2022 10:00:00").getTime();
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
            <Container className="space justify-content-center" key={interval}>
                <Row className="font-weight justify-content-center">
                    {timeLeft[interval]}
                </Row>
                <Row className="margin-top">
                    {interval}
                </Row>
            </Container>
        );
    });


    return (
        <div className="d-flex flex-row" xs="auto">
            {timerComponents.length ? timerComponents : <div className="empty-space"></div>}
        </div>
    );
}

export default CountDown;