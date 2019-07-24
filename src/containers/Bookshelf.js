import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBook(){
    return props.shelf.map(book => {
      return   <div>
      <h2>{book.title}</h2>
      <img src={book.img} 
       
       onClick={() => props.remove()}/>
    </div>
    })
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBook()}</ul>
    </div>
  );
};

export default Bookshelf;
