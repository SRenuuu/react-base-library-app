import React from "react";
import {Col, Row} from "react-bootstrap";

import Authors from "./Author";

const AuthorList: React.FC = () => {
    return (
        <Row className="author-list">
            <Col xs={12}>
                <label className='empty-list font-italic'>No authors listed here</label>
                <ul className='px-0 ml-0 pt-3 list-unstyled'>
                    <Authors/>
                    <Authors/>
                    <Authors/>
                </ul>
            </Col>
        </Row>
    )
}
export default AuthorList;