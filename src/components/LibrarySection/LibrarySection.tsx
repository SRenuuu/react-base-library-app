import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";

// Component imports
import AuthorSection from "./AuthorSection/AuthorSection";
import BookSection from "./BookSection/BookSection";

// Data types imports
import {IAuthor} from "../../types/LibraryDataTypes";

// Toasts and action confirmation imports
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // confirm alert styles

// Main component
const LibrarySection: React.FC = () => {

    // Use state and initialize
    const initAuthors: IAuthor[] = [];
    const [authors, setAuthors] = useState(initAuthors);

    return (
        <>
            <Row>
                <Col>
                    <ToastContainer hideProgressBar/>
                </Col>
            </Row>
            <Row className="mb-5 mx-2 mt-3 mt-md-2">
                <Col md={12} lg={6} className="px-lg-4 pl-lg-5 px-md-2 px-sm-0 my-2 my-lg-0 order-lg-2">
                    <AuthorSection authors={authors} setAuthors={setAuthors}/>
                </Col>
                <Col md={12} lg={6} className="px-lg-4 pr-lg-5 px-md-2 px-sm-0 my-2 my-lg-0">
                    <BookSection authors={authors}/>
                </Col>
            </Row>
        </>
    );
};

export default LibrarySection;