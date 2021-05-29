import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

// React Select, NumberFormat and Toast imports
import Select, {ValueType} from 'react-select';
import NumberFormat from 'react-number-format';
import {toast} from "react-toastify";

// Data types imports
import {IAuthor, IBook, SelectOption} from "../../../types/LibraryDataTypes";

// Typechecking with PropTypes
type BookFormProps = {
    onFormClose: () => void
    onBookAdd: (book: IBook) => void
    onBookUpdate: (book: IBook) => void
    bookToUpdate: IBook | null
    authors: IAuthor[] | null
}

// Main component
const BookForm: React.FC<BookFormProps> = (props) => {

    // Defining props
    const {bookToUpdate, authors, onBookUpdate, onBookAdd, onFormClose} = props;

    // Use state and initialize
    const [bookTitle, setBookTitle] = useState<string | null>(null);
    const [bookPrice, setBookPrice] = useState<string | null>(null);
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<SelectOption, false> | null>(null);
    const [options, setOptions] = useState<SelectOption[]>([]);

    // Update select options when authors are updated
    useEffect(() => {
        const options: SelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            const authorOption: SelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [];

        setOptions(options)
    }, [authors])

    // Set current book data when edit button is clicked
    useEffect(() => {
        if (!bookToUpdate) {
            return;
        }
        setBookTitle(bookToUpdate.title);
        setBookPrice(bookToUpdate.price);
        setBookAuthor(bookToUpdate.author);

        if (bookToUpdate.author) {
            const authorOption: SelectOption = {value: 0 + '', label: bookToUpdate.author.name};
            setSelectedAuthor(authorOption);
        }

    }, [bookToUpdate])

    // Handler functions
    const handleOnBookTitleChange = (title: string) => {
        setBookTitle(title);
    }

    const handleOnBookPriceChange = (price: string) => {
        setBookPrice(price);
    }

    const handleOnBookAuthorChange = (selectedOption: ValueType<SelectOption, false> | null) => {
        setSelectedAuthor(selectedOption);
        if (selectedOption) {
            const index = parseInt((selectedOption as SelectOption).value);
            const author: IAuthor | null = authors ? authors[index] : null;
            setBookAuthor(author);
            return;
        }
        setBookAuthor(null);
    };

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!bookTitle || !bookPrice) {
            toast.error("Book title and price fields cannot be empty");
            return;
        }

        if (bookToUpdate != null) {
            const updatedBook: IBook = {...bookToUpdate, title: bookTitle, price: bookPrice, author: bookAuthor};
            onBookUpdate(updatedBook);
            clearForm();
            return;
        }

        const newBook: IBook = {title: bookTitle, price: bookPrice, author: bookAuthor};
        onBookAdd(newBook);
        clearForm();
    }

    // Custom functions
    const clearForm = () => {
        setBookTitle(null);
        setBookPrice('');
        setBookAuthor(null);
        setSelectedAuthor(null);
    }

    return (
        <Row className="book-form my-5">
            <Col xs={12} sm={10} md={8} lg={12} xl={9}>
                <Row>
                    <Col xs={12} lg={11} className='form-title align-middle mb-1 pr-0'>
                        <label>{bookToUpdate === null ? "Create" : "Update"} Book</label>
                        <i className='feather-x-circle float-right mt-2' onClick={onFormClose}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={11} className='pt-4 pl-lg-4 pl-xl-5 ml-lg-2'>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group controlId="formBookTitle">
                                <Form.Label>Title of the Book</Form.Label>
                                <Form.Control type="text" placeholder="" className="mb-2"
                                              value={bookTitle ? bookTitle : ''} required
                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                  handleOnBookTitleChange(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBookPrice">
                                <Form.Label>Price</Form.Label>
                                <NumberFormat thousandSeparator={true} prefix={'$'} className="mb-2 form-control"
                                              placeholder=""
                                              value={bookPrice}
                                              required
                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                  handleOnBookPriceChange(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBookAuthor">
                                <Form.Label>Author</Form.Label>
                                <Select theme={style => ({
                                    ...style,
                                    borderRadius: 0,
                                })} isClearable
                                        className="mb-2 form-select"
                                        placeholder="Select author"
                                        name="Author"
                                        value={selectedAuthor}
                                        options={options}
                                        onChange={handleOnBookAuthorChange}
                                />
                                <Button type="submit"
                                        className='form-button mt-4 float-right py-1'>{bookToUpdate === null ? "Create" : "Update"}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default BookForm;