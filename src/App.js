import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const API = 'http://localhost:3005/books'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(books => {
      this.setState((prevState) => {
        return {
          books: books
        }
      })
    })
  }

  buyBook = (id) => {
    const foundBook = this.state.books.find(book => book.id === id)
    const updatedBooks = this.state.books.map(book => {
      if (book.id === foundBook.id) {
        return {...foundBook, onBookShelf: true}
      } else {
        return book
      }
    })
    this.setState((prevState) => {
      return {
        books: updatedBooks
      }
    })
  }

  addABook = (event, bookObj) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {
        books: [bookObj, ...prevState.books]
      }
    })
  }

  removeBook = (id) => {
    const foundBook = this.state.books.find(book => book.id === id)
    const updatedBooks = this.state.books.map(book => {
      if (book.id === foundBook.id) {
        return {...foundBook, onBookShelf: false}
      } else {
        return book
      }
    })
    this.setState((prevState) => {
      return {
        books: updatedBooks
      }
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} buyBook={this.buyBook} addABook={this.addABook} />
        <Bookshelf books={this.state.books.filter(book => book.onBookShelf)} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
