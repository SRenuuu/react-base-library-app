import React from 'react';
import {Col, Row} from "react-bootstrap";

// Icon imports
import {FaReact} from 'react-icons/fa';

// Main component
const FooterSection: React.FC = () => {
    return (
        <>
            <Row className="footer-section px-3 px-md-5 py-4">
                <Col>
                    <div className="content-1 mt-1 mb-3">
                        <FaReact/>
                        <p className="mt-2">Built with React</p>
                    </div>
                    <hr/>
                    <div className="content-2 text-secondary mt-4 mb-2">
                        <p className="mb-1">Developed by <em>Sandul Renuja</em></p>
                        <p className="small">React Base Industrial Training</p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FooterSection;