import React from "react";
import {Col, Row} from "react-bootstrap";

// Component imports

// Main component
const AuthorList: React.FC = (props) => {

    return (
        <Row className="author-list pt-2">
            <Col xs={12}>
                <label className='empty-list font-italic'>No authors listed here</label>
                <ul className="px-0 ml-0 pt-lg-1 list-unstyled">
                </ul>
            </Col>
        </Row>
    )
}

export default AuthorList;