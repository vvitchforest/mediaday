import "./contact-form.scss";
import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';

import { Container, Row, Col, Form, Button } from "react-bootstrap";


const ContactForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });


    const onSubmit = (e) => {
        e.preventDefault();
        send(
            `${process.env.REACT_APP_SERVICE_ID}`, //SERVICE ID
            `${process.env.REACT_APP_TEMPLATE_ID}`, //TEMPLATE ID
            toSend,
            `${process.env.REACT_APP_User_ID}` // User ID
        )
            .then((response) => {
                alert(`Thank you for your message. Your query has been forwarded.`);
                console.log('SUCCESS!', response.status, response.text);
                handleReset();
            })
            .catch((err) => {
                alert("Message failed to send.");
                console.log('FAILED...', err);
            });
    };

    const handleReset = () => {
        setToSend({
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mb-5">
            <Row>
                <h1 className="pt-4 pb-2 my-2 fs-1 my-heading">Yhteydenottolomake</h1>
            </Row>
            <Row>
                <Col className="bg-light p-3 shadow rounded d-flex">
                    <Form className="p-4 my-contact-form" onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="nameInput">
                            <Form.Label>Nimi *</Form.Label>
                            <Form.Control
                                type="text"
                                name='from_name'
                                value={toSend.from_name}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailInput">
                            <Form.Label>Sähköpostiosoite *</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="nimi@esimerkki.com"
                                name='reply_to'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="messageInput">
                            <Form.Label>Viesti *</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name='message'
                                value={toSend.message}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Button variant="purple-form" type="submit">Lähettää</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;