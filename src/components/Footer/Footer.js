import React from "react";
import "./footer.scss";
import { Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

//import eventData from "../data/events.json";

const Footer = () => {
    return (
        <div className="my-bgColor sticky-footer">
            <Container className="pb-4 pt-4">
                <Row className="d-flex justify-content-center pb-1 pt-1 footer-text">
                    © 2021 METROPOLIA AMMATTIKORKEAKOULU. ALL RIGHTS RESERVED.
                </Row>
                <Row xs="auto" className="d-flex justify-content-center pt-1 pb-1">
                        <Link as={Link} to="/about" className="footer-links">
                            MEISTÄ
                        </Link>
                        <Link as={Link} to="/contact" className="footer-links">
                            OTA YHTEYTTÄ
                        </Link>
                </Row>
                <Row xs="auto" className="d-flex justify-content-center pt-1 pb-1">
                <a href="https://facebook.com" alt="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://twitter.com" alt="twitter"><i class="bi bi-twitter"></i></a>
                <a href="https://instagram.com" alt="instagram"><i class="bi bi-instagram"></i></a>
               </Row>
            </Container>

        </div>
    )
};

export default Footer;
