import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => this.props.books.map(book => <Book book={book} moveSides={this.props.moveToShelf}/>)




  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form changeImg={this.props.changeImg} changeTitle={this.props.changeTitle} changeAuthor={this.props.changeAuthor} author= {this.props.author} title= {this.props.title} img= {this.props.img} addNewBook={this.props.addNewBook}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
