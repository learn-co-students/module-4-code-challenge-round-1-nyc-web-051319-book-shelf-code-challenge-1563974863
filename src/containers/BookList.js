import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  // state = {
  //   books: [],
  //   selectedBook: null
  // }
  //
  // componentDidMount(){
  //   console.log(this.props.test)
  //   fetch('http://localhost:3005/books')
  //   	.then(res=> res.json())
  //   	.then(bookData => {
  //       this.setState({
  //         books: bookData
  //       })
  //     })
  // }



  renderBooks = () => {
    console.log(this.props.books)
    return this.props.books.map((book) => {
        return <Book selectBook={this.props.selectBook} book={book}/>
      })
  }




  render() {

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
