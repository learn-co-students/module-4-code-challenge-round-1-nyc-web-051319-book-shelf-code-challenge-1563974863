import React from "react";

const Book = (props) => {
  return (
    <div onClick={() => props.sellBook(props.id)}>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} alt="oops!"/>
    </div>
  )
};

export default Book;
