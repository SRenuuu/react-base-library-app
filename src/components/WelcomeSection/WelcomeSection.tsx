import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import libraryPhoto from "../../assets/images/library-photo.jpg"

const WelcomeSection: React.FC = () => {
    return (
        <>
            <Container fluid className="welcome-section">
                <Row>
                    <Col>
                        <h1 className="welcome-header text-center my-3">
                            My Library
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        <Image src={libraryPhoto} alt="Photograph of Library"/>
                    </Col>
                    <Col className="p-2 px-5 text-end photo-credits">
                        Photo by <a
                        href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna
                        Hunko</a> on <a
                        href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WelcomeSection;