import React, { Component } from "react";

class Book extends Component {
  
  state = {
    shelved: false
  }
  
  shelfThisBook=()=>{
    this.setState({
      shelved: !this.state.shelved
    }, ()=>{ 
    if (!this.state.shelved){
      this.props.shelfBook(this.props.book)
    } else if (this.state.shelved){
      this.props.removeFromshelf(this.props.book)
    }})
  }
  
  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img src={this.props.book.img} onClick={this.shelfThisBook}/>
      </div>
    )
  }
}

export default Book;
