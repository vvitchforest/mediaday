import "./info-card.scss";

import React from "react";
import { Card } from "react-bootstrap";
import Gradient from '../Gradient/Gradient';

const InfoCard = ({ number, title, text, icon }) => {

    document.title = "MediaDay"

    return (
        <Card className="m-3 shadow p-3 mb-5 bg-light rounded">
            <Card.Body className="d-flex bd-highlight">
                <div className="p-3 w-100 bd-highlight">
                    <Card.Subtitle className="mb-2">
                        {number}
                    </Card.Subtitle>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </div>
                <div className="info-icons d-flex p-3 flex-shrink-1 bd-highlight align-items-start justify-content-start">
                    <div className="info-icons">
                        {icon}
                        <Gradient />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default InfoCard;