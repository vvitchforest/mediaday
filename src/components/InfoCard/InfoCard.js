import "./info-card.scss";
import React from "react";
import { Card } from "react-bootstrap";
import Gradient from '../Gradient/Gradient';

const InfoCard = ({ number, title, text, icon }) => {
    document.title = "MediaDay"

    return (
        <Card className="m-sm-3 shadow p-sm-3 mb-2 bg-light rounded filled">
            <Card.Body xs="auto" className="d-flex flex-column-reverse flex-sm-row">
                <div className="p-3 w-100">
                    <Card.Subtitle className="mb-2 my-number">
                        {number}
                    </Card.Subtitle>
                    <Card.Title className="my-title">
                        {title}
                    </Card.Title>
                    <Card.Text className="my-text">
                        {text}
                    </Card.Text>
                </div>
                <div className="info-icons d-flex p-3 align-items-start justify-content-start">
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