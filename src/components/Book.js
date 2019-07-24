import React from "react";

const Book = props => {
  
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} 
       
       onClick={()=>props.handleClick(props.id)}/>
    </div>
  );
};

export default Book;
