import React from "react";
 
class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBook(this.state)
  }

  render() {
    console.log(this.state.title)
    return (
      <form onSubmit={this.handleSubmit} >
        <h1>Add Book</h1>
        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange} ></input>
        Author: <input type="text" name="author" value={this.state.author} onChange={this.handleChange} ></input>
        ImageURL: <input type="text" name="img" value={this.state.img} onChange={this.handleChange} ></input>
        <input type="submit" value="Submit" ></input>
      </form>
    )
  }
}

export default Form;
