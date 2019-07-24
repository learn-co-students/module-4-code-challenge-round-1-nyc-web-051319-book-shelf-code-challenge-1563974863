import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBookShelf() {
    return props.bookShelf.map(book => {
      return <Book key={book.id} book={book} bookShelf={props.bookShelf} shelfBook={props.shelfBook} removeFromshelf={props.removeFromshelf} />
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBookShelf()}</ul>
    </div>
  );
};

export default Bookshelf;
