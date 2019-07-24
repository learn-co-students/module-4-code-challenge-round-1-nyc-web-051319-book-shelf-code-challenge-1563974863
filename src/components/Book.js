import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleClick(props.book.id)}>
      <h2>{props.book.name}</h2>
      <img src={props.book.img} alt={props.book.title} />
    </div>
  );
};

export default Book;
