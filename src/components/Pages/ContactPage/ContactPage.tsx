import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

//Main component
const ContactPage: React.FC = () => {
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
                <Row className="mb-5 mt-4 pb-4 contact-page mx-1">
                    <Col>
                        <Form>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formFName" className="mr-1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLName" className="ml-1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" required/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="my-2">
                                <Form.Group as={Col} controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject" required/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className="my-2">
                                <Form.Group as={Col} className="mb-3" controlId="formTextArea">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4}/>
                                </Form.Group>
                            </Form.Row>
                            <Button className='form-button mt-3 float-left my-2' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactPage;