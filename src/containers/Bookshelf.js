import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function createBookComp(book) {
    return <Book key={book.id} title={book.title} author={book.author} img={book.img} handleBookClick={()=>props.handleBookClick(book)}/>
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.booksOnShelf.map(book => createBookComp(book))}</ul>
    </div>
  );
};

export default Bookshelf;
