import React from "react";

class Book extends React.Component{
  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        {<img onClick={(event) => this.props.onClick(event, this.props.book.id)} src={this.props.book.img}/>}
        </div>
      );
    };
  }

export default Book;
