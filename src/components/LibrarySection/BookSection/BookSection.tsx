import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import BookHeader from "./BookHeader";

// Toast notifications imports

// Main component
const BookSection: React.FC = (props) => {

    // Usa state and initialize
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Handler functions
    const handleOnFormClose = () => {
        setIsFormVisible(false);
    }

    return (
        <Row className="book-section px-0 px-md-2 px-lg-3">
            <Col>
                <BookHeader/>
                <BookList/>
                <AddBook/>
                {isFormVisible &&
                <BookForm/>}
            </Col>
        </Row>
    )
}

export default BookSection;