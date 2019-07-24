import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map( book => {
        return <Book handleBookClick={props.handleBookClick} book={book} key={book.id}/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
