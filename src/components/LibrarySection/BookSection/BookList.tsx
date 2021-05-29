import React from "react";
import {Col, Row} from "react-bootstrap";

// Main component
const BookList: React.FC = (props) => {

    return (
        <Row className="book-list pt-2">
            <Col xs={12}>
                <label className='empty-list font-italic'>No books listed here</label>
                <ul className='px-0 ml-0 pt-lg-1 list-unstyled'>
                </ul>
            </Col>
        </Row>
    )
}

export default BookList;