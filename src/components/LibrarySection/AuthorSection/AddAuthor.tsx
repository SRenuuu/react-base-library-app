import React from "react";
import {Col, Row} from "react-bootstrap";

const AddAuthor: React.FC = () => {
    return (
        <Row className='add-author'>
            <Col>
                <i className='feather-plus mr-2'/>
                <label>Add Author</label>
            </Col>
        </Row>
    )
}
export default AddAuthor;