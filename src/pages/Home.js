import React, { useRef } from "react";
import StreamOnHomePage from "../components/StreamOnHomePage/StreamOnHomePage";
import CountDown from "../components/CountDown/CountDown";
import { Col, Container, Row, Button } from "react-bootstrap";
import InfoCard from "../components/InfoCard/InfoCard";
import { AiFillSmile } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { ImBubbles3 } from "react-icons/im";
import { BiLink } from "react-icons/bi";
import Sponsors from "../components/Sponsors/Sponsors";
import ButtonUp from "../components/ButtonUp/ButtonUp";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const toStreamRef = useRef();

    /**
     * Scrolls to the element with ref=toStreamRef when clicked on the button
     */
    const handleBackClick = () => {
        toStreamRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header>
                <div className="img">
                    <Container>
                        <div className="extra-margin-left">
                            <Slide triggerOnce={true}>
                                <Row xs="auto">
                                    <h1 className="display-2 mediaday">MEDIADAY</h1>
                                </Row>
                            </Slide>
                            <Slide delay={500} triggerOnce={true}>
                                <Row xs="auto">
                                    <p className="header-txt other-color">1.4.2022</p>
                                </Row>
                            </Slide>
                            <Slide delay={1000} triggerOnce={true}>
                                <Row xs="auto">
                                    <p className="slogan-txt">LET'S GET INSPIRED!</p>
                                </Row>
                            </Slide>
                            <Slide delay={1500} triggerOnce={true}>
                                <Row xs="auto" >
                                    <p className="header-txt border-no">Metropolia</p>
                                    <p className="header-txt closer">ammattikorkeakoulu</p>
                                </Row>
                            </Slide>
                            <Slide delay={2000} triggerOnce={true}>
                                <Row xs="auto">
                                    <p className="header-txt">Karaportti 2, Espoo</p>
                                </Row>
                            </Slide>
                        </div>
                        <Row xs="auto" className="justify-content-center extra-margin-top">
                            <Col>
                                <Button 
                                    variant="purple"
                                    onClick={handleBackClick}>
                                    Striimi
                                </Button>
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
            <div>
                <Container className="my-stream">
                    <StreamOnHomePage ref={toStreamRef} />
                </Container>
                <ButtonUp />
                <Container>
                    <Row xs={1} md={1} lg={2} className="g-4">
                        <Fade triggerOnce>
                            <Col>
                                <InfoCard
                                    number="01"
                                    title="MediaDay 2022"
                                    text="Metropolia ammattikorkeakoulu järjestää Mediaday-tapahtuman pitkän tauon jälkeen keväällä 2022."
                                    icon={<BiMoviePlay />}
                                />
                            </Col>
                        </Fade>
                        <Fade triggerOnce>
                            <Col>
                                <InfoCard
                                    number="02"
                                    title="Puhujia eri teollisuudenaloilta"
                                    text="Huipputason ammattilaisten puheenvuoroja, mukana onta rautaista puhujaa monelta mediakentän osa-alueelta."
                                    icon={<ImBubbles3 />}
                                />
                            </Col>
                        </Fade>
                        <Fade triggerOnce>
                            <Col>
                                <InfoCard
                                    number="03"
                                    title="Mediaday yhdistää"
                                    text="Mediaday tuo opiskelijat ja yritysmaailman yhteen. Näet uusimmat jutut ja tutustu ammattilaisten maailmaan."
                                    icon={<BiLink />}
                                />
                            </Col>
                        </Fade>
                        <Fade triggerOnce>
                            <Col>
                                <InfoCard
                                    number="04"
                                    title="Hyväntuulinen tekemisen meininki"
                                    text=" Meillä voi vapaasti kysellä ja ihmetellä, pääkohderyhmänä ovat opiskelijat."
                                    icon={<AiFillSmile />}
                                />
                            </Col>
                        </Fade>
                    </Row>
                </Container>
                <Container className="d-flex">
                    <Sponsors />
                </Container>
            </div>
        </>
    );
};

export default Home;
