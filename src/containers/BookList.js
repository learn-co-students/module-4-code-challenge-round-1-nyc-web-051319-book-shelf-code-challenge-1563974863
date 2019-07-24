import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  
  renderBookList = ()=>{
    return this.props.bookList.map(book =>{
      return <Book key={book.id} book={book} bookShelf={this.props.bookShelf} shelfBook={this.props.shelfBook} removeFromshelf={this.props.removeFromshelf}/>
    })
  }
  
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.renderBookList()}</ul>
      </div>
    );
  }
}

export default BookList;
