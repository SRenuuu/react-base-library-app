import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const CreateAuthor: React.FC = () => {
    return (
        <Row className="author-form mt-5">
            <Col xs={10}>
                <Row>
                    <Col xs={11} className='form-title align-middle mb-1'>
                        <label>Create Author</label>
                        <i className='feather-x-circle float-right mt-2'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={11} className='pt-3 pl-5'>
                        <Form>
                            <Form.Group controlId="formAuthorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="text" placeholder="" className="mb-2"/>
                                <Button className='form-button mt-4 float-right py-1'>Create</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}
export default CreateAuthor;