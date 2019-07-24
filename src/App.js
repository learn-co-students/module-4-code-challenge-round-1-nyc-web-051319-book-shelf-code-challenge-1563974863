import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookShelf: [],
    bookList: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(json => this.setState({
      bookList: json
    }))
  }

  getBook = (book) => {
    if(!this.state.bookShelf.includes(book)){
      this.setState({
        bookShelf: [...this.state.bookShelf, book]
      })
    }
  }
  giveBook = (book) => {
    this.setState({
      bookShelf: this.state.bookShelf.filter(myBook=> myBook.name !== book.name)
    })
  }

  addNewBook = (newBook) =>{
    this.setState({
      bookList:[...this.state.bookList, newBook]
    })
  }

  
  render() {
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} getBook={this.getBook} addNewBook={this.addNewBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} giveBook={this.giveBook}/>
      </div>
    );
  }
}

export default App;
