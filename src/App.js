import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = 'http://localhost:3005/books'
// API variable for easy fetching

class App extends Component {

  state = {
    booksData: [],
    clicked: false
  }

  // sets default clicked to false

// Fetch data
  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then((booksJsonData) => {
        this.setState({
          booksData: booksJsonData
        })
      })
  }

  handleClick = (currentClickedValue) => {

    // console.log('bepis')

    // this.setState({ clicked: !currentClickedValue });
    // console.log(this.state.clicked)

    // componentDidUpdate(prevProps, prevState){
    //   if (prevState != true)
    // }

    console.log(currentClickedValue)

  }


  // handleClick() {
  //   console.log('bepis')
  // }


  render() {
    const { booksData, clicked, handleClick } = this.state;

    return (
      <div className="book-container">
        <BookList
          booksData={ booksData }
          clicked={ clicked }
          handleClick={ this.handleClick }
        />
        <Bookshelf
          booksData={ booksData }
          clicked={ clicked}
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

export default App;
