import React from "react";

class Book extends React.Component {

  // state = { 
  //   inShelf: false 
  // }

  // removeBook = () => {
  //   this.setState({
  //     inShelf: !this.state.inShelf
  //   })
  //   this.props.removeFromShelf(this.props.book)
  // }
  // console.log(props)
    render() {
      return (
      <div onClick = {() => this.props.addToShelf(this.props.book)}>
        <h2>{this.props.book.title}</h2>
          <img src={this.props.book.img} alt="book"/>
      </div>
    );
  }
}

export default Book;

// () => this.props.addToShelf(this.props.book)
