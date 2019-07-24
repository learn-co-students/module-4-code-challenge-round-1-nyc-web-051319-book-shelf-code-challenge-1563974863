import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state ={
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  addToShelf = (foundBook) => {
    this.setState({
      bookShelf: [...this.state.bookShelf, foundBook]
    })
  }

  removeFromShelf = (foundBook) => {
    this.setState({
      bookShelf: this.state.bookShelf.filter(book => {
       return book.id !== foundBook.id
      })
    })
  }

  render() {
    // console.log(this.state.books)

    return (
      <div className="book-container">
        <BookList 
        books={this.state.books} 
        addToShelf={this.addToShelf} 
        />
        <Bookshelf 
        bookShelf={this.state.bookShelf} 
        books={this.state.books} 
        // removeFromShelf={this.removeFromShelf} 
        />
      </div>
    );
  }
}

export default App;
