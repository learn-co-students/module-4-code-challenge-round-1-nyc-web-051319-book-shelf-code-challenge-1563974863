import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBooks(){
    return props.booksOnShelf.map(book => {
      return <Book book={book} key={book.id} handleClick={props.removeBookFromShelf}/>
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
