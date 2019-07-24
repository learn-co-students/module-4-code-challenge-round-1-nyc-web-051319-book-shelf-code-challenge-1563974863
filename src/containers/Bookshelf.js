import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {

  const renderBooks = () => {
    return props.books.map(book => <Book key={book.id} book={book} handleClick={props.removeBook} />)
  }

  return (
    <div className="book-list">
      <h1>Book Shelf</h1>
      <ul>
      {
        renderBooks()
      }
      </ul>
    </div>
  )
}
export default Bookshelf;
