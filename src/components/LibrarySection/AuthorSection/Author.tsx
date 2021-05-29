import React from "react";
import {Col, Row} from "react-bootstrap";

// Data types imports
import {IAuthor} from "../../../types/LibraryDataTypes";

// Action confirmation imports
import {confirmAlert} from 'react-confirm-alert';

// Typechecking with PropTypes
type AuthorProps = {
    author: IAuthor
    num: number
    onAuthorUpdateClick: (authorIndex: number) => void
    onAuthorRemoveClick: (authorIndex: number) => void
}

// Main component
const Author: React.FC<AuthorProps> = (props) => {

    // Defining props
    const {author, num, onAuthorUpdateClick, onAuthorRemoveClick} = props;

    return (
        <li className='py-2'>
            <Row>
                <Col xs={8} md={9}>
                    <label className="my-1">{num}. {author.name}</label>
                </Col>
                <Col xs={4} md={3} className='icons text-right pr-0 pr-sm-2 pr-md-3'>
                    <i className='feather-edit text-warning pr-4 pr-lg-3' onClick={() =>
                        onAuthorUpdateClick(num - 1)
                    }/>
                    <i className='feather-trash-2 text-danger pr-3 pr-lg-3' onClick={() =>
                        confirmAlert({
                            title: 'Confirm action',
                            message: 'Delete the selected author?',
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => onAuthorRemoveClick(num - 1),
                                },
                                {
                                    label: 'No',
                                    onClick: () => {
                                    },
                                }
                            ]
                        })
                    }
                    />
                </Col>
            </Row>
        </li>
    )
}

export default Author;