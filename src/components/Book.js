import React from "react";

const Book = (props) => {
  return (
    <div onClick={()=>{props.getBook(props.book)}}>
      <h2>{props.book.title}</h2>
      <img src={ props.book.img } alt={null}></img>
    </div>
  );
};

export default Book;
