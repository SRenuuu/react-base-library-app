import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

// Main component
const AuthorForm: React.FC = (props) => {

    return (
        <Row className="author-form mt-5 mb-4">
            <Col xs={12} sm={10} md={8} lg={12} xl={9}>
                <Row>
                    <Col xs={12} lg={11} className='form-title align-middle mb-1 pr-0'>
                        <label>Create Author</label>
                        <i className='feather-x-circle float-right mt-2'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={11} className='pt-4 pl-lg-4 pl-xl-5 ml-lg-2'>
                        <Form>
                            <Form.Group controlId="formAuthorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                              className="mb-2"
                                              required
                                />
                                <Button className="form-button mt-4 float-right py-1"
                                        type="submit">Create</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AuthorForm;