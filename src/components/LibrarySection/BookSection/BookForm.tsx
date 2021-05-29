import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

// React Select, NumberFormat and Toast imports
import NumberFormat from 'react-number-format';
import Select from "react-select/base";

// Main component
const BookForm: React.FC = (props) => {

    return (
        <Row className="book-form my-5">
            <Col xs={12} sm={10} md={8} lg={12} xl={9}>
                <Row>
                    <Col xs={12} lg={11} className='form-title align-middle mb-1 pr-0'>
                        <label>Create Book</label>
                        <i className='feather-x-circle float-right mt-2'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={11} className='pt-4 pl-lg-4 pl-xl-5 ml-lg-2'>
                        <Form>
                            <Form.Group controlId="formBookTitle">
                                <Form.Label>Title of the Book</Form.Label>
                                <Form.Control type="text" placeholder="" className="mb-2"
                                              required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBookPrice">
                                <Form.Label>Price</Form.Label>
                                <NumberFormat thousandSeparator={true} prefix={'$'} className="mb-2 form-control"
                                              placeholder=""
                                              required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBookAuthor">
                                <Form.Label>Author</Form.Label>
                                <Select isClearable
                                        className="mb-2 form-select"
                                        placeholder="Select author"
                                        name="Author"
                                />
                                <Button type="submit"
                                        className='form-button mt-4 float-right py-1'>Create</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default BookForm;