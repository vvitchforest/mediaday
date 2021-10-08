import React, { useState, useEffect } from "react";
import "./sponsors.scss";
import { Col, Container, Row, Image, Alert } from "react-bootstrap";


//import eventData from "../data/events.json";

const Sponsors = () => {
    const [sponsorData, setSponsorData] = useState();

    const getSponsors = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch('/data/sponsors.json', options);
            const responseJson = await response.json();

            setSponsorData(responseJson);

        } catch (err) {
            console.log('error, no json', err);
        }
    };

    useEffect(() => {
        getSponsors();
    }, []);


    const sponsorResult = sponsorData?.sponsors.map(sponsorImages => {
        let sponsorImage = sponsorImages.image;
        let sponsorName = sponsorImages.name;
        let bgColor = sponsorImages.bg;
        let myClass;

        if (bgColor === "white") {
            myClass = "white";
        } else {
            myClass = "black";
        }

        console.log("sponsor result", sponsorImage);
        return (
            <Col className="d-flex align-content-center">
                <Image
                    src={sponsorImage}
                    alt={sponsorName}
                    className={myClass}
                />
            </Col>
        )
    });

    return (
        <Container>
            <Row>
                <h2 className="sponsor-heading">
                    YHTEISTYÖKUMPPANIT
                </h2>
            </Row>
            <Row >
                {sponsorResult}
            </Row>
        </Container>
    )
};

export default Sponsors;