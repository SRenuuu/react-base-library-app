import React from "react";
import {Col, Row} from "react-bootstrap";

// Data types imports
import {IBook} from "../../../types/LibraryDataTypes";

// Action confirmation imports
import {confirmAlert} from "react-confirm-alert";

// Typechecking with PropTypes
type BookProps = {
    book: IBook
    num: number
    onBookUpdateClick: (bookIndex: number) => void
    onBookRemoveClick: (bookIndex: number) => void
}

// Main component
const Book: React.FC<BookProps> = (props) => {

    // Defining props
    const {book, num, onBookUpdateClick, onBookRemoveClick} = props;

    return (
        <li className='py-2'>
            <Row>
                <Col xs={8} md={9}>
                    <label className="my-1">{num}. {book.title}</label>
                </Col>
                <Col xs={4} md={3} className='icons text-right pr-0 pr-sm-2 pr-md-3'>
                    <i className='feather-edit text-warning pr-4 pr-lg-3' onClick={
                        () => onBookUpdateClick(num - 1)
                    }/>
                    <i className='feather-trash-2 text-danger pr-3 pr-lg-3' onClick={
                        () => confirmAlert({
                            title: 'Confirm action',
                            message: 'Delete the selected book?',
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => onBookRemoveClick(num - 1),
                                },
                                {
                                    label: 'No',
                                    onClick: () => {
                                    },
                                }
                            ]
                        })
                    }/>
                </Col>
            </Row>
        </li>
    )
}

export default Book;