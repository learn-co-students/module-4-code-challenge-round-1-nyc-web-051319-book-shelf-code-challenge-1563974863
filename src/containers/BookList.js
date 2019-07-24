import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  renderBook = () => {
    return this.props.books.map(book => {
      return <Book book={book} id={book.id} handleClick={this.props.handleClick}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.renderBook()}</ul>
      </div>
    );
  }
}

export default BookList;
