import React, { useState} from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, NavLink } from "react-router-dom";
import logo from "../../m.svg";
import EventFetch from "../../EventFetch";


/**
 * Renders <Navigation /> component
 */

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const url = "/data/events.json";
  const eventData = EventFetch(url);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="px-5 border-bottom"
      fixed="top"
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Media Day logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="custom-toggler"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <NavbarCollapse>
        <Nav defaultActiveKey="/home" className="me-auto">
          <Nav.Item>
            <Nav.Link
              exact
              activeClassName="active"
              className="text-decoration-none"
              as={NavLink}
              to="/"
              onClick={() => setExpanded(false)}
            >
              MediaDay
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              exact
              activeClassName="active"
              className="text-decoration-none"
              as={NavLink}
              to="/schedule"
              onClick={() => setExpanded(false)}
            >
              Aikataulu
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title="Tapahtumat"
            className="text-decoration-none"
            show={show}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            {eventData?.events.map(({ videoUrl, title }) => (
              <NavDropdown.Item
                key={title}
                as={NavLink}
                to={`/event/${videoUrl}`}
                className="event-dropdown mb-3 px-0 px-sm-4 text-wrap text-decoration-none"
                activeClassName="event-dropdown-active"
                onClick={() => setExpanded(false)}
              >
                {title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Navigation;
