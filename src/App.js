import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
    bookShelf: [],
    title: "",
    author: "",
    img: ""
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(bookData => {
      this.setState({
        bookList: bookData
      })
    })
  }

  changeTitle =(event) => {
    this.setState({
      title: event.target.value
    })
  }
  changeAuthor =(event) => {
    this.setState({
      author: event.target.value
    })
  }
  changeImg =(event) => {
    this.setState({
      img: event.target.value
    })
  }

  moveToShelf = (book) => {
    if(this.state.bookShelf.includes(book)){}
      else{
      this.setState({
        bookShelf: [...this.state.bookShelf,book]
      })

    }
  }

  moveOffShelf = (myBook) => {
    this.setState({
      bookShelf: [...this.state.bookShelf.filter(book => {
        return book.id !== myBook.id
      })]
    })
  }

  addNewBook = (newBook) => {
    this.setState({
      bookList: [...this.state.bookList, newBook]
    },() => {
      this.setState({
        title: "",
        author: "",
        img: ""
      })
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.bookList} moveToShelf={this.moveToShelf} changeAuthor={this.changeAuthor} changeTitle={this.changeTitle} changeImg={this.changeImg} author= {this.state.author} title= {this.state.title} img= {this.state.img} addNewBook={this.addNewBook}/>
        <Bookshelf myBooks={this.state.bookShelf} moveOffShelf={this.moveOffShelf}/>
      </div>
    );
  }
}

export default App;
