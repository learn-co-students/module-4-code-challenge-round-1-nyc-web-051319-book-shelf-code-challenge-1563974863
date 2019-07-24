import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = props => {

  //(2) Render a list of books that show the book title and book img
  // Reversed the order of books so that the new book comes up at top
  function renderBooks(){
    const reversedBooks = props.books.slice().reverse()

    return reversedBooks.map(book => {
      return <Book book={book} key={book.id} handleClick={props.addBookToShelf}/>
    })
  }

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form addNewBook={props.addNewBook}/>
      <ul>{renderBooks()}</ul>
    </div>
  );

}

export default BookList;
