import "./about.scss";
import "../../styles.scss";

import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import EventFetch from "../../EventFetch";


/**
 * Renders <About /> component
 * 
 */

const About = () => {
  document.title = "Meistä";
  const url = "/data/events.json";
  const eventData = EventFetch(url);
  console.log("event data about mikä oot", eventData);

  return (
    <Container className="massive-margin about-container mb-5">
      <Row>
        <Col>
          <h1 className="main-heading-style text-center">MediaDay</h1>
          <h2 className="subheading-style text-center">
            1.4.2022, klo 10:00-17:00, Karaportti 2, Espoo
          </h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          xs={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 1 }}
          className="p-3 first-col"
        >
          <div className="p-3">
            <h2
              className="text-center subheading-style p-3"
              style={{
                color: "white",
              }}
            >
              Mikä on MediaDay?
            </h2>
            <p className="text-style">
              MediaDay on Metropolia Ammattikorkeakoulun monialainen tapahtuma,
              joka kokoaa yhteen digitaalisen median yritykset ja asiantuntijat,
              alan kouluttajat ja opiskelijat
            </p>

            <ul className="text-style m-md-4">
              <li>
                pohtimaan digitalisoitumisen vaikutuksia työelämään, oppimiseen
                ja opettamiseen
              </li>
              <li>jakamaan media-alan innovaatioita, tietoa ja tutkimusta</li>
              <li>keskustelemaan alan työnäkymistä ja koulutuksesta</li>
            </ul>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          lg={{ span: 6, order: 2 }}
          className="p-3"
        >
          <div className="p-3">
            <h2 className="text-center subheading-style p-3">
              Verkostoituminen
            </h2>
            <p className="text-style">
              Tapahtuman keskiössä ovat uudet media-alan teknologiat, messutori,
              kansainväliset asiantuntijaluennot, tietoiskut ja demonstraatiot.
              Media Day mahdollistaa kouluttajien ja opiskelijoiden
              verkostoitumisen yritysmaailman asiantuntijoiden kanssa.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, order: 4 }}
          lg={{ span: 6, order: 3 }}
          className="p-3"
        >
          <div className="p-3">
            <h2 className="text-center subheading-style p-3">Puhujat</h2>
            <p className="text-style">
              Media Day on pullollaan asiantuntemusta. Tule sinäkin paikalle
              katsomaan ja kuuntelemaan
            </p>
            <p className="text-style">Puhujina mm. </p>
            <ul className="text-style m-md-3">
              {eventData?.events.map(({ speaker }) => (
                <li key={speaker.name}>
                  {speaker.name}, <i>{speaker.company}</i>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          lg={{ span: 6, order: 4 }}
          className="p-3 last-col"
        >
          <div className="p-3">
            <h2
              className="text-center subheading-style p-3"
              style={{
                color: "white",
              }}
            >
              Miksi mukaan MediaDayhin?
            </h2>
            <p className="text-style">
              Pääset tutustumaan uusimpiin media-alan teknologioihin ja
              innovaatiohin, yrityksiin ja koulutukseen sekä verkostoitumaan
              alan toimijoiden kanssa. Kuulet minkälaisia taitoja työelämä
              tarvitsee juuri nyt ja millaista osaamista alan koulutuksessa
              syntyy.
            </p>
            <p className="text-style">Tervetuloa!</p>
            <p className="text-style">Tilaisuus on maksuton.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
