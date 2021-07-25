import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

// Data types imports
import {IAuthor} from "../../../../../types/LibraryDataTypes";

// Toast notifications imports
import {toast} from "react-toastify";

// Typechecking with PropTypes
type AuthorFormProps = {
    onFormClose: () => void
    onAuthorAdd: (author: IAuthor) => void
    onAuthorUpdate: (author: IAuthor) => void
    authorToUpdate: IAuthor | null
}

// Main component
const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    // Defining props
    const {authorToUpdate, onAuthorAdd, onAuthorUpdate, onFormClose} = props;

    // Use state for author name and initialize as null
    const [authorName, setAuthorName] = useState<string | null>(null);

    // Set current author name when edit button is clicked
    useEffect(() => {
        if (!authorToUpdate) {
            return;
        }
        setAuthorName(authorToUpdate.name);
    }, [authorToUpdate]);

    // Handler functions
    const handleOnAuthorNameChange = (name: string) => {
        setAuthorName(name);
    }

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!authorName || authorName === '') {
            toast.error("Authorn name field cannot be empty");
            return;
        }
        if (authorToUpdate != null) {
            const updatedAuthor: IAuthor = {...authorToUpdate, name: authorName}
            onAuthorUpdate(updatedAuthor);
            setAuthorName('');
            return;
        }

        const newAuthor: IAuthor = {name: authorName};
        onAuthorAdd(newAuthor);
        setAuthorName(null);
    };

    return (
        <Row className="author-form mt-5 mb-4">
            <Col xs={12} sm={10} md={8} lg={12} xl={9}>
                <Row>
                    <Col xs={12} lg={11} className='form-title align-middle mb-1 pr-0'>
                        <label>{authorToUpdate === null ? "Create" : "Update"} Author</label>
                        <i className='feather-x-circle float-right mt-2' onClick={onFormClose}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={11} className='pt-4 pl-lg-4 pl-xl-5 ml-lg-2'>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group controlId="formAuthorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                              className="mb-2"
                                              value={authorName ? authorName : ''}
                                              required
                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                  handleOnAuthorNameChange(event.target.value)}
                                />
                                <Button className="form-button mt-4 float-right py-1"
                                        type="submit">{authorToUpdate === null ? "Create" : "Update"}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AuthorForm;