import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    newBook: null
  }

  renderBooks = () => {
    return this.props.books.map(book =>
      <Book
        key={book.id}
        title={book.title}
        imgUrl={book.img}
        id={book.id}
        sellBook={this.props.sellBook}
      />
    )
  }

  render() {

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
