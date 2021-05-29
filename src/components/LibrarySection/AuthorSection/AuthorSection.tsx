import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorHeader from "./AuthorHeader";

// Main component
const AuthorSection: React.FC = (props) => {

    // Usa state and initialize
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Handler functions
    const handleOnFormClose = () => {
        setIsFormVisible(false);
    };

    return (
        <Row className="author-section px-0 px-md-2 px-lg-3">
            <Col>
                <AuthorHeader/>
                <AuthorList/>
                <AddAuthor/>
                {isFormVisible && <AuthorForm/>}
            </Col>
        </Row>
    )
}

export default AuthorSection;