import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  renderShelf = () => {
    console.log(this.props.removeBook)



  return this.props.selectedBooks.map((book)=> {
      return <Book chosenBook={this.props.chosenBook} removeBook={this.props.removeBook} book={book}/>
    })
  }
  //How can I remove the clicked book from the selectec books array in state?


  render(){
    return (
      <div >
      <h1>Book Shelf</h1>

      <ul>{this.renderShelf()}</ul>
      </div>
    );

  }
};

export default Bookshelf;
