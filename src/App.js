import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: [],
    clicked: false,
    author: "",
    image: "",
    name: ""
  }

  handleClick = (e, bookID) => {
    //finds the parent container that was clicked
    const bookShelf = e.target.parentElement.parentElement.previousSibling.innerText
    const bookList = e.target.parentElement.parentElement.parentElement.className

    //finds the book that was clicked on
    let foundBook = this.state.books.find(book => book.id === bookID)

    //checks to see if the book is in my bookshelf
    if(!this.state.bookshelf.includes(foundBook) ){
      //checks to see if the click came from the booklist
      if(bookList === "book-list"){
        this.setState({
          clicked: true,
          bookshelf: [...this.state.bookshelf, foundBook]
        })
      }
    }
    //checked to see if the click came from the book shelf
    if(bookShelf === "Book Shelf"){
      let newShelf = this.state.bookshelf.filter(books => books.id !== bookID)
      this.setState({
        bookshelf: newShelf
      })
    }
  }

  //handles form changes on the inputs
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //gets the data from the db
  fetchData = () => {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  //grabs the data from the form and sends a post request to the server
  AddNewBook = () => {
    fetch("http://localhost:3005/books",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepted": "application/json"
      },
      body: JSON.stringify({
        title: this.state.name,
        author: this.state.author,
        img: this.state.image
      })
    })
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        books: [...this.state.books,books]
        //tried to not clear the bookshelf when adding a new book to the list
        // bookshelf: [...this.state.bookshelf]
      })
    })
  }

  //waits until the page has loaded to grab the data
  componentDidMount(){
    this.fetchData()
  }


  render() {
    const { author, image, name, books, bookshelf } = this.state
    return (
      <div className="book-container">
        <BookList
        author={author}
        image={image}
        name={name}
        handleChange={this.handleOnChange}
        onSubmit={this.AddNewBook}
        onClick={this.handleClick}
        books={books}
        />

        <Bookshelf
        onClick={this.handleClick}
        books={bookshelf}
        />
      </div>
    );
  }
}

export default App;
