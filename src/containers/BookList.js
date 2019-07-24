import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

// need to pass clicked info from book to booklist so booklist knows what to render, same for shelf
  constructor(props){
    super(props);

  }

  renderBooks(){
    return this.props.booksData.map((item) => !this.props.clicked ? <Book title={item.title} img={item.img} clicked={this.props.clicked} handleClick={this.props.handleClick}/> : console.log('nothing'))
  }
  // removed HandleClick

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
