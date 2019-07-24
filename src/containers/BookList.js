import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  renderBooks = () => {
    return this.props.books.map(book => {
      return < Book
              key={book.id}
              book={book}
              handleClick={this.props.handleClick} />
    })
  }

  render() {
    const { title, author, img, addBookToList, handleFormChanges } = this.props

    return (
      <div className="book-list">
        <h1>Book List</h1>
        < Form
        title={title}
        author={author}
        img={img}
        addBookToList={addBookToList}
        handleFormChanges={handleFormChanges} />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
