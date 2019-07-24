import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    booksOnShelf: [],
    allBooks: [],
    currBookId: 0
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        allBooks: books,
        currBookId: books.length - 1
      })
    })
  }

  handleAddBookToShelf = (book) => {
    const removedBook = this.state.allBooks.filter(ele => ele !== book) 
    this.setState({
      allBooks: removedBook,
      booksOnShelf: [...this.state.booksOnShelf, book]
    })
  }

  handleRemoveBookFromShelf = (book) => {
    const remainingBooks = this.state.booksOnShelf.filter(ele => ele !== book)
    this.setState({
      booksOnShelf: remainingBooks,
      allBooks: [...this.state.allBooks, book]
    })
  }

  createNewBook = (book) => {
    const newBookId = this.state.currBookId + 1
    this.setState({
      currBookId: newBookId
    })
    return {
      id: newBookId + 1,
      title: book.title,
      author: book.author,
      img: book.img
    }
  }

  addNewBook = (book) => {
    const newBook = this.createNewBook(book)
    this.setState({
      allBooks: [...this.state.allBooks, newBook]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} handleBookClick={this.handleAddBookToShelf} addNewBook={this.addNewBook}/>
        <Bookshelf booksOnShelf={this.state.booksOnShelf} handleBookClick={this.handleRemoveBookFromShelf}/>
      </div>
    );
  }
}

export default App;
