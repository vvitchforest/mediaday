import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.svg";
//import eventData from "../../data/events.json";

const Navigation = () => {
  const [eventData, setEventData] = useState();

  const getEvents = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/data/events.json", options);
      const responseJson = await response.json();

      setEventData(responseJson);
    } catch (err) {
      console.log("error, no json", err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
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
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="custom-toggler"
      />
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
            {eventData?.events.map(({ videoUrl, title }) => (
              <NavDropdown.Item
                key={title}
                as={NavLink}
                to={`/event/${videoUrl}`}
                className="event-dropdown mb-3 px-0 px-sm-4 text-wrap"
                activeClassName="event-dropdown-active"
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
