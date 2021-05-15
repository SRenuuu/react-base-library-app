import React from "react";
import {Col, Row} from "react-bootstrap";

const Authors: React.FC = () => {
    return (
        <li className='py-2'>
            <Row>
                <Col xs={9}>
                    <label>1. Author 1 Name</label>
                </Col>
                <Col xs={3} className='icons text-right'>
                    <i className='feather-edit text-warning pr-3'/>
                    <i className='feather-trash-2 text-danger pr-2'/>
                </Col>
            </Row>
        </li>
    )
}
export default Authors;