import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component{

  renderBooks = () => this.props.myBooks.map(book => <Book book={book}  moveSides={this.props.moveOffShelf}/>)
  render(){
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  };
  }

export default Bookshelf;
