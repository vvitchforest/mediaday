import React, { useState, useEffect } from "react";
import "./sponsors.scss";
import { Col, Container, Row, Image} from "react-bootstrap";


const Sponsors = () => {
    const [sponsorData, setSponsorData] = useState();

    /**
     * Fetches data from sponsors.json from public forder
     * 
     * @async
     */
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

        return (
            <Col className="d-flex align-self-center justify-content-center" key={sponsorImages.name}>
                <div className="correct-size">
                    <Image
                        src={sponsorImage}
                        alt={sponsorName}
                        className={myClass}
                    />
                </div>
            </Col>
        )
    });

    return (
        <Container className="mb-4">
            <Row xs="auto" className="justify-content-center">
                <h2 className="sponsor-heading">
                    MUKANA MEDIADAY'SSÄ
                </h2>
            </Row>
            <Row xs="auto" className="justify-content-center">
                {sponsorResult}
            </Row>
        </Container>
    )
};

export default Sponsors;