import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => {
      return <Book 
        key={book.id}
        book={book}
        addToShelf={this.props.addToShelf}
        />
    })
  }


  render() {

    // console.log("book List",this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
