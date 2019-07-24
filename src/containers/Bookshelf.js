import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  function renderBooks(){
   return props.bookShelf.map(book=>{
     return <Book key={book.id} book={book} getBook={props.giveBook} />
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
