import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = props => {

  function renderBooks(){
    return props.books.map(book => {
      return <Book onClick={props.onClick} book={book}/>
    })
  }
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onSubmit={props.onSubmit} handleChange={props.handleChange}/>
        <ul>{renderBooks()}</ul>
      </div>
    );
}

export default BookList;
