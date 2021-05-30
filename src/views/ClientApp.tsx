import React from 'react';
import {Container} from "react-bootstrap";

// Component imports
import LibrarySection from "../components/LibrarySection/LibrarySection";
import FooterSection from "../components/FooterSection/FooterSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

// Main component
const ClientApp: React.FC = () => {
    return (
        <>
            <Container fluid>
                <WelcomeSection/>
                <LibrarySection/>
                <FooterSection/>
            </Container>
        </>
    );
};

export default ClientApp;