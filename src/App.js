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

  handleAddBook = (book) => {
    this.setState({
      booksOnShelf: [...this.state.booksOnShelf, book]
    })
  }

  handleRemoveBook = (book) => {
    const removedBook = this.state.booksOnShelf.filter(ele => ele !== book)
    this.setState({
      booksOnShelf: removedBook
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
        <BookList allBooks={this.state.allBooks} handleBookClick={this.handleAddBook} addNewBook={this.addNewBook}/>
        <Bookshelf booksOnShelf={this.state.booksOnShelf} handleBookClick={this.handleRemoveBook}/>
      </div>
    );
  }
}

export default App;
