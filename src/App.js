import "./App.scss";

import { Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import AboutPage from "./pages/AboutPage";
import PromoVideo from "./pages/PromoVideo";
import EventPage from "./pages/EventPage";
import SchedulePage from "./pages/SchedulePage";
import logo from "./logo.svg";
import bgPicture from "./images/bg1.jpg";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import eventData from "./data/events.json"
import { Col, Container, Row, Image, Button} from "react-bootstrap";
import InfoCard from './components/InfoCard/InfoCard';
import { AiFillSmile } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { ImBubbles3 } from 'react-icons/im';
import { BiLink } from 'react-icons/bi';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/schedule">
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/promovideo">
                Tapahtuman promo
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Events">
              <NavDropdown.Item as={Link} to="/event/mediaday-01">
                Tulevaisuuden ratkaisut elokuvatuotannossa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/event/mediaday-02">
              Käyttäjäkokemuksen merkitys IT-järjestelmissä
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/event/mediaday-03">
              Yrittäjyys korkean teknologian alalla
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/event/mediaday-04">
              Kamerauutuudet indie-tuotannossa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/event/mediaday-05">
              Minne menet, suomalainen AV-ala?
              </NavDropdown.Item>
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
        <Route path="/promovideo">
          <PromoVideo />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/">
          <header>
            <Image src={bgPicture} className="img"/>
            <Container className="text-over-img">
            <Row xs="auto">
              <h1 className="display-2">MEDIADAY</h1>
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
            <Row className="justify-content-md-center extra-margin">
              <Col md="auto">
                <Button variant="purple">Striimi</Button>
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
                icon={<AiFillSmile/>}
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
