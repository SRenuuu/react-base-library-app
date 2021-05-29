import React from "react";
import {Col, Row} from "react-bootstrap";

// Main component
const AddAuthor: React.FC = (props) => {

    return (
        <Row className='add-author mt-2'>
            <Col>
                <i className='feather-plus mr-2'/>
                <label>Add Author</label>
            </Col>
        </Row>
    )
}

export default AddAuthor;