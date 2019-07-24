import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    author: "",
    title: "",
    img: "",
    newBook: null,
    // newBooks: []
  }
    //last 15 min mark, thinking about lifting state so I can add these values to a newBook object in App and there I have my books [] in state which I could use to setState with something like this.setState({ books: [...books, {newBook}] })

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //this doesnt work yet
  handleSubmit = (event) => {
    event.persist();
    console.log("submit!!", this.state)
    if (!this.state.newBook) {
      let bookInfo = { title: this.state.title, author: this.state.author, img: this.state.img }
      debugger;
        this.setState({
          books: [...this.state.books, {bookInfo}]
        })
        return this.state.newBook
    } else {
      return this.state.newBook
    }
      // debugger;
      //page instantly reloads on submit and my state is wiped
      // this.setState({
      //   author: "",
      //   title: "",
      //   img: ""
      // })
    debugger;
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
    console.log(this.state)
    return (
      <div className="book-container">
        <BookList
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          img={this.state.img}
          author={this.state.author}

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
