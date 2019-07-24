import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = 'http://localhost:3005/books'

class App extends Component {
  state = {
    books: [],
    shelfBooks: [],
    title: '',
    author: '',
    img: ''
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(books => {
      this.setState({ books })
    })
  }

  addBookToShelf = (book) => {
    if (this.state.shelfBooks.includes(book)) {
      return null
    } else {
      this.setState((prevState) => ({
        shelfBooks: [...prevState.shelfBooks, book]
      }))
    }
  }

  removeBookFromShelf = (bookToRemove) => {
    this.setState((prevState) => ({
      shelfBooks: [...prevState.shelfBooks].filter(book => book !== bookToRemove)
    }))
  }

  handleFormChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addBookToList = (event) => {
    event.preventDefault()

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

    this.setState((prevState) => ({
      books: [newBook, ...prevState.books],
      title: '',
      author: '',
      img: ''
    }))
  }

  render() {
    const { books, shelfBooks, title, author, img } = this.state
    return (
      <div className="book-container">
        < BookList
        books={books}
        handleClick={this.addBookToShelf}
        title={title}
        author={author}
        img={img}
        addBookToList={this.addBookToList}
        handleFormChanges={this.handleFormChanges} />
        < Bookshelf
        shelfBooks={shelfBooks}
        handleClick={this.removeBookFromShelf} />
      </div>
    );
  }
}

export default App;
