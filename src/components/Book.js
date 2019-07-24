import React, { Component } from "react";

//changed to class to change state
class Book extends Component {

  state = {
    clicky: false
  }
  // giving book its own individual state separate from app so every book can have a boolean clicked value

  constructor(props){
    super(props);
    console.log(this.state)
  }

// toggle for books individual clicked value
  toggle(){
        const currentClicked = this.state.clicky;

        this.setState({ clicky: !currentClicked });

        this.props.handleClick(this.state.clicky);

    }
    //need to pass to booklist so it knows what to render

  // handleClick() {
  //   console.log(this.props.clicked)
  //   // console.log('bepis')
  //   const currentClicked = this.clicked;
  //   this.setState({ clicked: !currentClicked });
  //
  //   // componentDidUpdate(prevProps, prevState){
  //   //   if (prevState != true)
  //   // }
  //
  //   console.log(this.props.clicked)
  // }

  // handleClick: function(e) {
  //       if (typeof this.props.handleClick === 'function') {
  //           this.props.handleClick(e.target.value);
  //       }
  //   },

  render(){
    return (
      <div onClick={() => this.toggle()}>
        <h2>{this.props.title}</h2>
        <img src={this.props.img} />
      </div>
    );
  };

  // <div onClick={() => this.props.handleClick(this.props.clicked)}>

}
export default Book;
