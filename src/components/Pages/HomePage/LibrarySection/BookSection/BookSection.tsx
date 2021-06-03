import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

// Component imports
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import BookHeader from "./BookHeader";

// Data types imports
import {IAuthor, IBook} from "../../../../../types/LibraryDataTypes";

// Toast notifications imports
import {toast} from "react-toastify";

// Typechecking with PropTypes
type BookSectionProps = {
    authors: IAuthor[] | null
}

// Main component
const BookSection: React.FC<BookSectionProps> = (props) => {

    // Defining props
    const {authors} = props;

    // Usa state and initialize
    const initBooks: IBook[] = [];
    const [books, setBooks] = useState<IBook[]>(initBooks);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
    const [bookToUpdateIndex, setBookToUpdateIndex] = useState<number | null>(null);

    // Handler functions
    const handleOnFormClose = () => {
        setIsFormVisible(false);
        setBookToUpdateIndex(null);
        setBookToUpdate(null);
    }

    const handleOnAddClick = () => {
        setBookToUpdateIndex(null);
        setBookToUpdate(null);
        setIsFormVisible(true);
    }

    const handleOnUpdateClick = (index: number) => {
        setBookToUpdateIndex(index);
        setBookToUpdate(books[index]);
        setIsFormVisible(true);
    }

    const handleOnRemoveClick = (index: number) => {
        handleOnFormClose();
        const allBooks: IBook[] = books.slice();
        allBooks.splice(index, 1);
        setBooks(allBooks);
        toast.warning("Book deleted");
    }

    const handleOnBookAdd = (newBook: IBook) => {
        const allBooks: IBook[] = books.slice();
        allBooks.push(newBook);
        setBooks(allBooks);
        toast.success("Book added");
    }

    const handleOnBookUpdate = (updatedBook: IBook) => {
        if (bookToUpdateIndex === null) {
            return;
        }
        const allBooks: IBook[] = books.slice();
        allBooks.splice(bookToUpdateIndex, 1, updatedBook);
        setBooks(allBooks);
        handleOnFormClose();
        toast.info("Book updated");
    }

    return (
        <Row className="book-section px-0 px-md-2 px-lg-3">
            <Col>
                <BookHeader/>
                <BookList books={books} onUpdateClick={handleOnUpdateClick} onRemoveClick={handleOnRemoveClick}/>
                <AddBook onAddClick={handleOnAddClick}/>
                {isFormVisible &&
                <BookForm onFormClose={handleOnFormClose} onBookAdd={handleOnBookAdd} onBookUpdate={handleOnBookUpdate}
                          bookToUpdate={bookToUpdate} authors={authors}/>}
            </Col>
        </Row>
    )
}

export default BookSection;