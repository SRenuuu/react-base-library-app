import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

// Main component
const AboutPage: React.FC = () => {
    return (
        <>
            <Container>
                <Row className="welcome-section header">
                    <Col>
                        <h1 className="header text-center mb-3 mt-4">
                            About
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-5 mt-4 pb-5 about-page mx-1">
                    <Col>
                        <p>
                            This is the first ever project developed at React Base Industrial Training. This app is
                            built purely with <em>React</em> using <em>TypeScript</em>. All good software development
                            strategies and coding practices were followed when developing this wep app. Currently only
                            the frontend is functional.
                            Everything is based on <a href="https://reactjs.org/docs/thinking-in-react.html"
                                                      rel="noreferrer" target="_blank">Thinking in React</a>.
                            Various modern technologies and dependencies such as React functional components, useState
                            and useEffect hooks, react-bootstrap, react-toastify, react-number-formatter,
                            react-confirm-alert etc. have been utilized.
                        </p>
                        <p>
                            It can be used to manage books and authors in a library. The app is very light weight and
                            offers a simple, minimal UI. It is also fully responsive on any device. It allows you to:
                        </p>
                        <p className="mb-0 mb-xl-4">
                            <ul>
                                <li>Add books</li>
                                <li>Edit books</li>
                                <li>Delete books</li>
                            </ul>
                            <ul>
                                <li>Add authors</li>
                                <li>Edit authors</li>
                                <li>Delete authors</li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AboutPage;