import React from "react";
import {Col, Row} from "react-bootstrap";

// Typechecking with PropTypes
type AddAuthorProps = {
    onAddClick: () => void
}

// Main component
const AddAuthor: React.FC<AddAuthorProps> = (props) => {

    // Defining props
    const {onAddClick} = props;

    return (
        <Row className='add-author mt-2'>
            <Col onClick={onAddClick}>
                <i className='feather-plus mr-2'/>
                <label>Add Author</label>
            </Col>
        </Row>
    )
}

export default AddAuthor;