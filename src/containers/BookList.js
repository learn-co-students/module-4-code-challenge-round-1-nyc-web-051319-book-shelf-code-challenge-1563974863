import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  // state = {
  //   author: "",
  //   title: "",
  //   img: "",
  //   newBook: null,
  //   // newBooks: []
  // }
  //
  // handleChange = (event) => {
  //   // console.log(event.target.value)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  //
  // handleSubmit = (event) => {
  //   event.persist();
  //   console.log("submit!!", this.state)
  //   if (!this.state.newBook) {
  //     let bookInfo = { title: this.state.title, author: this.state.author, img: this.state.img }
  //     debugger;
  //       this.setState({
  //         newBook: bookInfo
  //       })
  //       return this.state.newBook
  //   } else {
  //     return this.state.newBook
  //   }
  //     // debugger;
  //     //page instantly reloads on submit and my state is wiped
  //     // this.setState({
  //     //   author: "",
  //     //   title: "",
  //     //   img: ""
  //     // })
  //   debugger;
  // }
  //i have my form set up, on submit the book needs to show up on the bookList
  //make another array for newly made books and use conditional rendering
  //last 15 min mark, thinking about lifting state so I can add these values to a newBook object in App and there I have my books [] in state which I could use to setState with something like this.setState({ books: [...books, {newBook}] })


  render() {
    // console.log("book list", this.state)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          title={this.props.title}
          img={this.props.img}
          author={this.props.author}/>
        <ul>
          {this.props.books.map(book => {
            return <Book handleBookClick={this.props.handleBookClick} book={book} key={book.id}/>
          })}
        </ul>
      </div>
    );
  }
}

export default BookList;
