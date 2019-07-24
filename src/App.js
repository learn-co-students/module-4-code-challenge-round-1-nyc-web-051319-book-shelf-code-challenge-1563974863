import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const API = 'http://localhost:3005/books'

class App extends Component {

  state = {
    bookList: [],
    bookShelf: []
  }
  
  // FETCH
  getBooks = ()=>{
    fetch(API)
      .then(resp => resp.json())
      .then(books => this.setState({
        bookList: books
      }))
  }

  componentDidMount(){
    this.getBooks()
  }

  // HELPER FUNCTIONS
  shelfBook = (book)=>{
    // console.log(book)
    const { bookShelf } = this.state
    this.setState({
        bookShelf: [...bookShelf, book]
    })
  }

  removeFromshelf =(book)=>{
    const { bookShelf } = this.state
    let index = bookShelf.indexOf(book)

    if (bookShelf){
      let newBookShelf = bookShelf.splice(index,1)
      this.setState({
        bookShelf: newBookShelf
      })
    }
  }

  // RENDER
  render() {
    const { bookList, bookShelf } = this.state
    return (
      <div className="book-container">
        <BookList bookList={bookList} bookShelf={bookShelf} shelfBook={this.shelfBook} removeFromshelf={this.removeFromshelf}/>
        <Bookshelf bookShelf={bookShelf} bookList={bookList} shelfBook={this.shelfBook} removeFromshelf={this.removeFromshelf}/>
      </div>
    );
  }
}

export default App;
