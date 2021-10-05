import "./App.scss";

import React, { useState } from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./styles.scss";

import AboutPage from "./pages/AboutPage";
import PromoVideo from "./pages/PromoVideo";
import EventPage from "./pages/EventPage";
import SchedulePage from "./pages/SchedulePage";
import CountDown from "./components/CountDown/CountDown";
import logo from "./logo.svg";
import bgPicture from "./images/bg1.jpg";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import eventData from "./data/events.json";
import { Col, Container, Row, Image, Button, Offcanvas } from "react-bootstrap";
import InfoCard from "./components/InfoCard/InfoCard";
import { AiFillSmile } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { ImBubbles3 } from "react-icons/im";
import { BiLink } from "react-icons/bi";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="px-5 border-bottom"
        fixed="top"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse>
          <Nav defaultActiveKey="/home" className="me-auto">
            <Nav.Item>
              <Nav.Link exact activeClassName="active" as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link exact activeClassName="active" as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                exact
                activeClassName="active"
                as={NavLink}
                to="/schedule"
              >
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleShow}>Events</Nav.Link>
            </Nav.Item>
            <Offcanvas
              show={show}
              onHide={handleClose}
              scroll="true"
              keyboard="true"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="mx-5 mt-2">MediaDay events</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="fs-5">
                {eventData.events.map(({ videoUrl, title }) => (
                  <Nav.Item key={title}>
                    <Nav.Link
                      as={NavLink}
                      to={`/event/${videoUrl}`}
                      className="event-drawer mb-3"
                      activeClassName="event-drawer-active"
                    >
                      {title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
        </NavbarCollapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <AboutPage name="Irina" />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/">
          <header>
            <Image src={bgPicture} className="img" />
            <Container className="text-over-img">
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
                <p className="header-txt">23.3.2022 Karaportti 2, Espoo</p>
              </Row>
              <Row className="justify-content-md-center extra-margin-top">
                <Col md="auto">
                  <Button variant="purple">Striimi</Button>
                </Col>
              </Row>
              <Row className="justify-content-md-center extra-margin-bottom mt-4">
                <Col md="auto">
                  <CountDown />
                </Col>
              </Row>
            </Container>
          </header>
          <body>
            <Container>
              <Row xs={1} md={2} className="g-4">
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
