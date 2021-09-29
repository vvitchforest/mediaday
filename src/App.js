import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import AboutPage from "./pages/AboutPage";
import PromoVideo from "./pages/PromoVideo";
import EventPage from "./pages/EventPage";
import SchedulePage from "./pages/SchedulePage";
import logo from "./logo.svg";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import eventData from "./data/events.json"

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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
