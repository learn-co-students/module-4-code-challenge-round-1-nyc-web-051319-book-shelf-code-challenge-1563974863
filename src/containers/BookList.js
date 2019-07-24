import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
 
class BookList extends Component {

  renderBookList = () => {
    return this.props.bookList.map(book => {
      return <Book key={book.id} book={book} handleClick={this.props.handleClick}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} />
        <ul>{this.renderBookList()}</ul>
      </div>
    );
  }
}

export default BookList;
