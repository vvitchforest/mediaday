import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { Container, Row } from "react-bootstrap";

const ContactPage = () => (
<Container className="mt-5 full-height">
    <Row xs="auto" className="justify-content-center">
    <ContactForm />
    </Row>
</Container>
);


export default ContactPage;