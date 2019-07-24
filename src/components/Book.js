import React from "react";

class Book extends React.Component {
  state = {
    clicked: false
  }

  toggle= () => {
    this.setState({
      clicked: true
    })
  }

//this.state.clicked ? removeBook() : selectBook()



  //I need a ternary here dependent on state, depending on whether or not the book has been clicked
  //in shelf or list I need it to disappear or appear


  render(){
    return (
      <div onClick={this.state.clicked ? () =>  this.props.removeBook() : () => this.props.selectBook(this.props.book.id)}>

      <h2>{this.props.book.title}</h2>
      <img src={this.props.book.img} />
      </div>
    );

  }
};

export default Book;
