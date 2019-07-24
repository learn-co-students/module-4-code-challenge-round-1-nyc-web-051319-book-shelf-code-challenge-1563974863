import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    booksOnShelf: []
  }

  // (1) Fetch & Get a response that is an array of multiple book objects
  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(bookObjs => {
      this.setState({
        books: bookObjs
      })
    })
  }

  // (3) Clicking on a book in the Book List adds it to the Book Shelf
  // BONUS: Each book can only be added to Book Shelf one time
  addBookToShelf = (bookObj) => {
    if (!this.state.booksOnShelf.includes(bookObj)){
      this.setState(prevState => {
        return {
          booksOnShelf: [...prevState.booksOnShelf, bookObj]
        }
      })
    }
  }

  // (4) Clicking on a book in the Book Shelf removes it from the Book Shelf
  removeBookFromShelf = (bookObj) => {
    const newBooks = this.state.booksOnShelf.filter(book => {
      return book.id !== bookObj.id
    })

    this.setState({
      booksOnShelf: newBooks
    })
  }

  // (5) Add a book to the Book List (does NOT persist)
  addNewBook = (bookInfo) => {
    const newId = this.state.books.length + 1
    const {title, author, img} = bookInfo
    const newBook = Object.assign({id: newId, title: title, author: author, img: img})

    this.setState(prevState => {
      return {
        books: [...prevState.books, newBook]
      }
    })
  }

  render() {
    const {books, booksOnShelf} = this.state
    return (
      <div className="book-container">
        <BookList books={books} addBookToShelf={this.addBookToShelf} addNewBook={this.addNewBook}/>
        <Bookshelf booksOnShelf={booksOnShelf} removeBookFromShelf={this.removeBookFromShelf}/>
      </div>
    );
  }
}

export default App;
