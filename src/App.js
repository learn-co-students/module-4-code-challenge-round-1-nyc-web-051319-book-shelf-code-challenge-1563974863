import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = 'http://localhost:3005/books'

class App extends Component {

  state ={
    books: [],
    booksOnShelf: []
  }
  
  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        books: data
      })
    })
  }

  addToShelf = (addedBook) => {
    // Need to remove book from list? README doesnt specify
    this.setState({
      booksOnShelf: [...this.state.booksOnShelf, addedBook]
    })
  }

  removeBook = (removedBook) => {
    this.setState({
      booksOnShelf: []
      // TEMPPPORARYYY ^^
    })
  }

  createBook = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.addToShelf} createBook={this.createBook}/>
        <Bookshelf booksOnShelf={this.state.booksOnShelf} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
