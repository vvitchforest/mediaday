import "./App.scss";

import React, { useState } from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.scss";

import AboutPage from "./pages/AboutPage";
import PromoVideo from "./pages/PromoVideo";
import EventPage from "./pages/EventPage";
import SchedulePage from "./pages/SchedulePage";
import CountDown from "./components/CountDown/CountDown";
import logo from "./logo.svg";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import eventData from "./data/events.json";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import InfoCard from "./components/InfoCard/InfoCard";
import { AiFillSmile } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { ImBubbles3 } from "react-icons/im";
import { BiLink } from "react-icons/bi";
import DropdownItem from "@restart/ui/esm/DropdownItem";


function App() {
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
                MediaDay
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link exact activeClassName="active" as={NavLink} to="/about">
                Meistä
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                exact
                activeClassName="active"
                as={NavLink}
                to="/schedule"
              >
                Aikataulu
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Tapahtumat">
              {eventData.events.map(({ videoUrl, title }) => (
                <NavDropdown.Item
                  key={title}
                  as={NavLink}
                  to={`/event/${videoUrl}`}
                  className="event-dropdown mb-3"
                  activeClassName="event-dropdown-active"
                >
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
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
              <Row xs="auto"className="justify-content-center extra-margin-top">
                <Col>
                  <Button variant="purple">Striimi</Button>
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
