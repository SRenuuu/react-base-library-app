import React from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import Author from "./Author";

// Data types imports
import {IAuthor} from "../../../types/LibraryDataTypes";

// Typechecking with PropTypes
type AuthorListProps = {
    authors: IAuthor[]
    onUpdateClick: (authorIndex: number) => void
    onRemoveClick: (authorIndex: number) => void
}

// Main component
const AuthorList: React.FC<AuthorListProps> = (props) => {

    // Defining props
    const {authors, onUpdateClick, onRemoveClick} = props;

    // Custom function for rendering author list
    const renderAuthors = () => {
        if (authors.length === 0) {
            return;
        }
        return authors.map((author: IAuthor, index: number) => {
            return <Author author={author} key={index} num={index + 1} onAuthorUpdateClick={onUpdateClick}
                           onAuthorRemoveClick={onRemoveClick}/>
        });
    }

    return (
        <Row className="author-list pt-2">
            <Col xs={12}>
                {authors.length === 0 && <label className='empty-list font-italic'>No authors listed here</label>}
                <ul className="px-0 ml-0 pt-lg-1 list-unstyled">
                    {renderAuthors()}
                </ul>
            </Col>
        </Row>
    )
}

export default AuthorList;