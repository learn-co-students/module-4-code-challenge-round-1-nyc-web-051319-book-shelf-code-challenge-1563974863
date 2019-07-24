import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = (props) => {

  const renderBooks = () => {
    return props.books.map(book => <Book key={book.id} book={book} handleClick={props.buyBook} />)
  }

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form addABook={props.addABook} bookLength={props.books.length} />
      <ul>
      {
        renderBooks()
      }
      </ul>
    </div>
  )
}
export default BookList;
