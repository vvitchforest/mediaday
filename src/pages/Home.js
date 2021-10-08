import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import StreamOnHomePage from "../components/StreamOnHomePage/StreamOnHomePage";
import CountDown from "../components/CountDown/CountDown";
import { Col, Container, Row, Button } from "react-bootstrap";
import InfoCard from "../components/InfoCard/InfoCard";
import { AiFillSmile } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { ImBubbles3 } from "react-icons/im";
import { BiLink } from "react-icons/bi";


const Home = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const toStreamRef = useRef();

    function handleBackClick() {
        toStreamRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header>
                <div className="img">
                    <Container className="text-over-img">
                        <div className="extra-margin-left">
                            <Row xs="auto">
                                <h1 className="display-2 mediaday">MEDIADAY</h1>
                            </Row>
                            <Row xs="auto">
                                <p className="slogan-txt">LET'S GET INSPIRED!</p>
                            </Row>
                            <Row xs="auto">
                                <p className="header-txt">Metropolia ammattikorkeakoulu</p>
                            </Row>
                            <Row xs="auto">
                                <p className="header-txt">23.3.2022</p>
                            </Row>
                            <Row xs="auto">
                                <p className="header-txt">Karaportti 2, Espoo</p>
                            </Row>
                        </div>
                        <Row xs="auto" className="justify-content-center extra-margin-top">
                            <Col>
                                <Button variant="purple"
                                    onClick={handleBackClick}
                                >Striimi</Button>

                            </Col>
                        </Row>
                        <Row xs="auto" className="justify-content-center extra-margin-bottom mt-2">
                            <Col>
                                <CountDown />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <body>
                <Container>
                    <StreamOnHomePage />
                </Container>
                <Container>
                    <Row xs={1} md={1} lg={2} className="g-4">
                        <Col>
                            <InfoCard
                                number="01"
                                title="MediaDay 2022"
                                text="Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän tauon jälkeen keväällä 2022."
                                icon={<BiMoviePlay />}
                            />
                        </Col>
                        <Col>
                            <InfoCard
                                number="02"
                                title="Puhujia eri teollisuudenaloilta"
                                text="Huipputason ammattilaisten puheenvuoroja, mukana onta rautaista puhujaa monelta mediakentän osa-alueelta."
                                icon={<ImBubbles3 />}
                            />
                        </Col>
                        <Col>
                            <InfoCard
                                number="03"
                                title="Mediaday yhdistää"
                                text="Mediaday tuo opiskelijat ja yritysmaailman yhteen. Näet uusimmat jutut ja tutustu ammattilaisten maailmaan."
                                icon={<BiLink />}
                            />
                        </Col>
                        <Col>
                            <InfoCard
                                number="04"
                                title="Hyväntuulinen tekemisen meininki"
                                text=" Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat."
                                icon={<AiFillSmile />}
                            />
                        </Col>
                    </Row>
                </Container>
            </body>
            <div ref={toStreamRef} >TEST</div>

        </>
    );
};

export default Home;
