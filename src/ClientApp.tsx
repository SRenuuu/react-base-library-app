import React from 'react';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import LibrarySection from "./components/LibrarySection/LibrarySection";
import FooterSection from "./components/FooterSection/FooterSection";

const ClientApp: React.FC = () => {
    return (
        <>
            <WelcomeSection/>
            <LibrarySection/>
            <FooterSection/>
        </>
    );
};

export default ClientApp;