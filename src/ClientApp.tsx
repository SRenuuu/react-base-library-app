import React from 'react';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import LibrarySection from "./components/LibrarySection/LibrarySection";

const ClientApp: React.FC = () => {
    return (
        <>
            <WelcomeSection/>
            <LibrarySection/>
        </>
    );
};

export default ClientApp;