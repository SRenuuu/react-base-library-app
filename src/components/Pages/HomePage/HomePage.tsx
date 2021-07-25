import React from 'react';
import LibrarySection from "./LibrarySection/LibrarySection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import {Container} from "react-bootstrap";

//Main component
const HomePage: React.FC = () => {
    return (
        <>
            <Container fluid>
                <WelcomeSection/>
                <LibrarySection/>
            </Container>

        </>
    );
};

export default HomePage;