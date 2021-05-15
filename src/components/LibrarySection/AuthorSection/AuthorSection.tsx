import React from "react";
import {Col, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorHeader from "./AuthorHeader";

const AuthorSection: React.FC = () => {
    return (
        <Row className="author-section">
            <Col>
                <AuthorHeader/>
                <AuthorList/>
                <AddAuthor/>
                <AuthorForm/>
                <br/>
                <br/>
            </Col>
        </Row>
    )
}
export default AuthorSection;