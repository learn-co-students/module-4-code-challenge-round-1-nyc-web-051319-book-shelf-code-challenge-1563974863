import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
 
class App extends Component {

  state = {
    books: [],
    bookList: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(allBooks => {
      this.setState({
        books: allBooks
      })
    })
  }

  handleClick = (book) => {
    if (!this.state.bookList.includes(book)) {
      this.setState(prevState => ({
        bookList: [...prevState.bookList, book]
      }))
      this.removeShelfBook(book)
    }
    else if (this.state.bookList.includes(book)) {
      this.setState(prevState => ({
        books: [...prevState.books, book]
      }))
      this.removeListBook(book)
    }
  }

  removeListBook = (book) => {
    const bookIndex = this.state.bookList.findIndex(element => element.name === book.name)
    this.state.bookList.splice(bookIndex, bookIndex + 1)
  }

  removeShelfBook = (book) => {
    const bookIndex = this.state.books.findIndex(element => element.name === book.name)
    this.state.books.splice(bookIndex, bookIndex + 1)
  }

  addBook = (book) => {
    this.setState(prevState => ({
      books: [...prevState.books, book]
    }))
  }

  render() {
    const {bookList, books} = this.state
    const {handleClick, addBook} = this
    return (
      <div className="book-container">
        <BookList bookList={bookList} addBook={addBook} handleClick={handleClick} />
        <Bookshelf books={books} handleClick={handleClick} />
      </div>
    );
  }
}

export default App;
