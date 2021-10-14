import "./contact-form.scss";
import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import { format } from 'date-fns'
import logo from "../../m.svg";

import { Container, Row, Col, Form, Button, Toast, ToastContainer } from "react-bootstrap";


const ContactForm = () => {
    document.title = "Ota yhteyttä";

    const [show, setShow] = useState(false);
    const [postMessage, setPostMessage] = useState('');
    let TimeNow = format(new Date(Date.now()), 'dd.MM.yyyy')

    /**
     * Form field names that have to be same as in the EmailJS template form
     */
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });


    /**
     * Connects to the EmailJS api and sends response success or failed
     * 
     * @param {*} e event
     */
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            `${process.env.REACT_APP_SERVICE_ID}`, //SERVICE ID
            `${process.env.REACT_APP_TEMPLATE_ID}`, //TEMPLATE ID
            toSend,
            `${process.env.REACT_APP_User_ID}` // User ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setPostMessage("Kiitos! Viestisi on lähetetty.");
                setShow(true);
                handleReset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setPostMessage("Viestin lähettäminen epäonnistui.");
                setShow(true)
            });
    };

    /**
     * Resets the form fields
     */
    const handleReset = () => {
        setToSend({
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
        });
    };

    /**
     * Sends info to mail via EmailJS
     * 
     * @param {*} e event
     */
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mb-5">
            <Row>
                <h1 className="pt-4 pb-2 my-2 fs-1 main-heading-style text-center">Yhteydenottolomake</h1>
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
            <Row>
                <ToastContainer className="p-3 d-flex justify-content-center" position={'middle-center'}>
                    <Toast bg={"light"} className="m-4" onClose={() => setShow(false)} show={show} delay={10000} autohide>
                        <Toast.Header className="my-toast-base my-toast-border">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="rounded me-2"
                                alt="Media Day logo"
                            />
                            <strong className="me-auto">Mediaday</strong>
                            <small>{TimeNow}</small>
                        </Toast.Header>
                        <Toast.Body className="my-toast-base">{postMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Row>
        </Container>
    );
};

export default ContactForm;