import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Component imports
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import HomePage from "../components/Pages/HomePage/HomePage";
import AboutPage from "../components/Pages/AboutPage/AboutPage";
import ContactPage from "../components/Pages/ContactPage/ContactPage";

// Main component
const ClientApp: React.FC = () => {
    return (
        <>
            <Router>
                <HeaderSection/>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
                <FooterSection/>
            </Router>
        </>
    );
};

export default ClientApp;