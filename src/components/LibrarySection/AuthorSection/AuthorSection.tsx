import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorHeader from "./AuthorHeader";

// Data types imports
import {IAuthor} from "../../../types/LibraryDataTypes"

// Toast notifications imports
import {toast} from "react-toastify";

// Typechecking with PropTypes
type AuthorSectionProps = {
    authors: IAuthor[]
    setAuthors: (authors: IAuthor[]) => void
}

// Main component
const AuthorSection: React.FC<AuthorSectionProps> = (props) => {

    // Defining props
    const {authors, setAuthors} = props;

    // Usa state and initialize
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
    const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null);

    // Handler functions
    const handleOnFormClose = () => {
        setIsFormVisible(false);
        setAuthorToUpdateIndex(null);
        setAuthorToUpdate(null);
    };

    const handleOnAddClick = () => {
        setAuthorToUpdateIndex(null);
        setAuthorToUpdate(null);
        setIsFormVisible(true);
    };

    const handleOnUpdateClick = (index: number) => {
        setAuthorToUpdateIndex(index);
        setAuthorToUpdate(authors[index]);
        setIsFormVisible(true);
    };

    const handleOnRemoveClick = (index: number) => {
        handleOnFormClose();
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(index, 1);
        setAuthors(allAuthors);
        toast.warning("Author deleted");
    };

    const handleOnAuthorAdd = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
        toast.success("Author added");
    };

    const handleOnAuthorUpdate = (updatedAuthor: IAuthor) => {
        if (authorToUpdateIndex === null) {
            return;
        }
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(authorToUpdateIndex, 1, updatedAuthor);
        setAuthors(allAuthors);
        handleOnFormClose();
        toast.info("Author updated");
    };

    return (
        <Row className="author-section px-0 px-md-2 px-lg-3">
            <Col>
                <AuthorHeader/>
                <AuthorList authors={authors} onUpdateClick={handleOnUpdateClick} onRemoveClick={handleOnRemoveClick}/>
                <AddAuthor onAddClick={handleOnAddClick}/>
                {isFormVisible && <AuthorForm onFormClose={handleOnFormClose} onAuthorAdd={handleOnAuthorAdd}
                                              onAuthorUpdate={handleOnAuthorUpdate} authorToUpdate={authorToUpdate}/>}
            </Col>
        </Row>
    )
}

export default AuthorSection;