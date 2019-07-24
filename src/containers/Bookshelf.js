import React from "react";
import BoughtBook from "../components/BoughtBook";

class Bookshelf extends React.Component {

  //NEW COMPONENT 'BOUGHTBOOK' SINCE THIS ONE IS GOING TO HAVE A STATE TOGGLE TO REMOVE IT FROM THE BOOKSHELF AND ORIGINAL 'BOOK' COMPONENT DOESN'T HAVE STATE
  renderMovedBooks = () => {
    return this.props.movedBooks.map(book => <BoughtBook key={book.id} title={book.title} imgUrl={book.img} id={book.id}/>)
  }

  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.renderMovedBooks()}</ul>
      </div>
    )
  }
};

export default Bookshelf;
