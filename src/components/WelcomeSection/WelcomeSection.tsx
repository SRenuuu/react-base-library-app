import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

// Image imports
import libraryPhoto from "../../assets/images/library-photo.webp"

// Main component
const WelcomeSection: React.FC = () => {
    return (
        <>
            <Row className="welcome-section header">
                <Col>
                    <h1 className="header text-center my-3">
                        My Library
                    </h1>
                </Col>
            </Row>
            <Row className="welcome-section content">
                <Col xs={12} className="p-0">
                    <Image src={libraryPhoto} alt="Photograph of Library"/>
                </Col>
                <Col xs={12} className="p-3 pb-2 px-4 px-md-5 text-end photo-credits text-right">
                    Photo by <a
                    href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna
                    Hunko</a> on <a
                    href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </Col>
            </Row>
        </>
    );
};

export default WelcomeSection;