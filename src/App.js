import React, { Component } from "react";
// import logo from "./logo.svg"; NOT USED
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import LoadingPage from "./components/LoadingPage"

class App extends Component {

  state = {
    books: null,
    movedBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(data =>
        this.setState({
          books: data
        })
      )
  }

  sellBook = (id) => {
    let foundBook = this.state.books.filter(book => book.id === id)
    //IF YOU WANT TO REMOVE IT FROM THE BOOKLIST IDK IT MAKES SENSE DOESN'T IT :(
    // let restOfBooks = this.state.books.filter(book => book.id !== id)
    let joined = this.state.movedBooks.concat(foundBook[0])
    this.setState((prevState) => ({
      movedBooks: joined
      // books: restOfBooks
    }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let bookExist = this.state.books.filter(book => book.title === this.state.title)
    //CHECK TO SEE IF TITLE ALREADY EXISTS
      if (bookExist.length === 0) {
        this.setState({
          books: [{id: this.state.books.length + 1,
                  title: this.state.title,
                  author: this.state.author,
                  img: this.state.img}, ...this.state.books]
        })
      }
  }

  render() {
    return (
      <div className="book-container">
        {
          this.state.books ?
          <BookList
            books={this.state.books} sellBook={this.sellBook} handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          :
          <LoadingPage/>
        }
        <Bookshelf movedBooks={this.state.movedBooks}/>
      </div>
    );
  }
}

export default App;
