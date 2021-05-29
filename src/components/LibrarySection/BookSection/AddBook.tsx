import React from "react";
import {Col, Row} from "react-bootstrap";

// Typechecking with PropTypes
type AddBookProps = {
    onAddClick: () => void
}

// Main component
const AddBook: React.FC<AddBookProps> = (props) => {

    // Defining props
    const {onAddClick} = props;

    return (
        <Row className='add-book mt-2'>
            <Col onClick={onAddClick}>
                <i className='feather-plus mr-2'/>
                <label>Add Book</label>
            </Col>
        </Row>
    )
}

export default AddBook;