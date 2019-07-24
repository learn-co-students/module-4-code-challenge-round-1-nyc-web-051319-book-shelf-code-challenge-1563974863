import React from "react";

class Form extends React.Component {

  addBook = () => {
    fetch("http://localhost:3005/books",{
      method: "POST",
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: this.props.title,
      author: this.props.author,
      img: this.props.img
        }
      )
    })
    .then(resp=>resp.json())
    .then(newBook => {this.props.addNewBook(newBook)})


}


  render() {
    return (
    <div>
      <input type="text" name="" onChange={this.props.changeTitle} placeholder="Title" value={this.props.title}/>
      <input type="text" name="" onChange={this.props.changeAuthor}placeholder="Author" value={this.props.author}/>
      <input type="text" name="" onChange={this.props.changeImg}placeholder="ImgUrl" value={this.props.img}/>
      <button onClick={this.addBook}type="button" name="button">Book</button>
    </div>
    )
  }
}

export default Form;
