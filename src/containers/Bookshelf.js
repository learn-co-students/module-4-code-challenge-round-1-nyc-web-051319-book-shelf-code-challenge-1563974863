import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  // console.log(props)

  function renderShelf() {
    return props.bookShelf.map(book => {
      return <Book 
              book={book} 
              bookShelf={props.bookShelf} 
              // removeFromShelf={props.removeFromShelf}
              />
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderShelf()}</ul>
    </div>
  );
};

export default Bookshelf;
