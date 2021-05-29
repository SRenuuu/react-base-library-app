import React from "react";
import {Col, Row} from "react-bootstrap";

// Main component
const AddBook: React.FC = (props) => {

    return (
        <Row className='add-book mt-2'>
            <Col>
                <i className='feather-plus mr-2'/>
                <label>Add Book</label>
            </Col>
        </Row>
    )
}

export default AddBook;