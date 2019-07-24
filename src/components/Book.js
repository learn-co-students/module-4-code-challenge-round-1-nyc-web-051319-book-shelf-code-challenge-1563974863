import React from "react";


export default class Book extends React.Component {
  
  state = {
    onShelf: false
  }

  handleClick = () => {
    if(this.state.onShelf === false) {
      this.setState({
        onShelf: true
      },
      () => this.props.addToShelf(this.props.book)
      )
    } else {
      this.setState({
        onshelf: false
      },
      () => this.props.removeBook(this.props.book)
      )
    }
    
  }

  render() {
    
    const {title, author, img} = this.props.book 

    return (
      <div 
      onClick={() => this.handleClick()}>
        <h2>{title}</h2>
        <p>{author}</p>
        <img src={img} alt={title} />
      </div>
    );
  }
}
