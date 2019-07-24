import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  createBookComp = (book) => {
    return <Book key={book.id} title={book.title} author={book.author} img={book.img} handleBookClick={()=>this.props.handleBookClick(book)}/>
  }


  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook}/>
        <ul>{
          this.props.allBooks.map(book => this.createBookComp(book))
        }</ul>
      </div>
    );
  }
}

export default BookList;
