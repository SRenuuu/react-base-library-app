import React from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import Book from "./Book";

// Data types imports
import {IBook} from "../../../types/LibraryDataTypes";

// Typechecking with PropTypes
type BookListProps = {
    books: IBook[]
    onUpdateClick: (bookIndex: number) => void
    onRemoveClick: (bookIndex: number) => void
}

// Main component
const BookList: React.FC<BookListProps> = (props) => {

    // Defining props
    const {books, onUpdateClick, onRemoveClick} = props;

    // Custom function for rendering book list
    const renderBooks = () => {
        if (books.length === 0) {
            return;
        }
        return books.map((book: IBook, index: number) => {
            return <Book book={book} key={index} num={index + 1} onBookUpdateClick={onUpdateClick}
                         onBookRemoveClick={onRemoveClick}/>
        })
    }

    return (
        <Row className="book-list pt-2">
            <Col xs={12}>
                {books.length === 0 && <label className='empty-list font-italic'>No books listed here</label>}
                <ul className='px-0 ml-0 pt-lg-1 list-unstyled'>
                    {renderBooks()}
                </ul>
            </Col>
        </Row>
    )
}

export default BookList;