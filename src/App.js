import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: [],
    clickedBook: {}
  }

  handleClick = (bookId) => {
    // console.log(book)
    const foundBook = this.state.books.find(bookObj => {
      return bookId === bookObj.id
    })
    this.setState({
    
        shelf: [...this.state.shelf, foundBook],
        clickedBook: foundBook
           

       })
  }
  
  removeBook = (clickedBook) => {
    console.log(this.state.clickedBook)
    const newShelf = this.state.shelf.filter(book => {
      return this.state.clickedBook.id !== book.id
    })
    // console.log(newShelf)
    this.setState({
      shelf: newShelf
    })
    
  }
  

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:3005/books')
      .then(response => response.json())
      .then(booksData => {
        this.setState({
          books: booksData
        })
      })
  }
  


  render() {
    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList 
          
          books={this.state.books}
          handleClick={this.handleClick}
          />
        <Bookshelf
        shelf={this.state.shelf} 
        remove={this.removeBook}
        />
      </div>
    );
  }
}

export default App;
