import React from 'react';
import AuthorSection from "./AuthorSection/AuthorSection";
import {Col, Container, Row} from "react-bootstrap";

const LibrarySection: React.FC = () => {
    return (
        <>
            <Container fluid className="library-section">
                <Row>
                    <Col>
                        {/*<BookSection/>*/}
                        BookSection
                    </Col>
                    <Col>
                        <AuthorSection/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LibrarySection;