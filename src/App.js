import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {

  state = {
    books: [],
    selectedBooks: [],
    chosenBook: {},
    clicked: false
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
      .then(res=> res.json())
      .then(bookData => {
        this.setState({
          books: bookData
        })
      })
  }

  selectBook = (bookId) => {


        let newBook = this.state.books.find((book) => {
          return  book.id === bookId
        })

        let newArray = [...this.state.selectedBooks, newBook]

        this.setState({

          selectedBooks: newArray
        })

    }

  removeBook = () => {
    console.log('removed')
  }

  chosenBook = (bookId) => {

    let newBook = this.state.books.find(book => book.id === bookId)

    let newArray = this.state.books.map((book) => {
      if (book.id === bookId){
        return newBook
      } else {
        return book
      }
    })

    this.setState ({
      selectedBooks: newArray
    })
  }



  render() {
    return (
      <div className="book-container">
        <BookList selectBook={this.selectBook} books={this.state.books} test={this.test}/>
        <Bookshelf chosenBook={this.chosenBook} removeBook={this.removeBook} selectedBooks={this.state.selectedBooks} addBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
