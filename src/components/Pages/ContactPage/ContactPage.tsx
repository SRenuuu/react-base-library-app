import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const AboutPage: React.FC = () => {
    return (
        <>
            <Container>
                <Row className="welcome-section header">
                    <Col>
                        <h1 className="header text-center mb-3 mt-4">
                            Contact
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-5 mt-4 pb-4 contact-page">
                    <Col>
                        <Form>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formFName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className="my-2">
                                <Form.Group as={Col} className="mb-3" controlId="formTextArea">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit" className="my-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AboutPage;