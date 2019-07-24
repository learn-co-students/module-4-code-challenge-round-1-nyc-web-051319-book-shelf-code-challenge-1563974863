import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  function renderBooks(){
    return props.books.map(book => {
      return <Book onClick={props.onClick} book={book}/>
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
