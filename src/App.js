import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(r => r.json())
      .then(bookData => {
        let updatedBooks = bookData.map(book => {return {...book, selected: false}})
        this.setState({
          books: updatedBooks
        })
      })
  }

  handleBookClick = (bookId) => {
    console.log(bookId)
    //hell yeah i got the id!!
    let selectedBook = this.state.books.map(book => {
      if (book.id === bookId) {
        return {...book, selected: !book.selected}
      } else {
        return book
      }
    })

    this.setState({
      books: selectedBook
    })
    console.log("select", selectedBook)
  }

  filterBooks = () => {
    return this.state.books.filter(book => book.selected)
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList
          handleBookClick={this.handleBookClick}
          books={this.state.books}/>
        <Bookshelf
          handleBookClick={this.handleBookClick}
          books={this.filterBooks()}/>
      </div>
    );
  }
}

export default App;
