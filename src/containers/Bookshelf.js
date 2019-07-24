import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  function renderShelfBooks(){
    return props.shelfBooks.map(book => {
      return < Book
              key={book.id}
              book={book}
              handleClick={props.handleClick} />
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderShelfBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
