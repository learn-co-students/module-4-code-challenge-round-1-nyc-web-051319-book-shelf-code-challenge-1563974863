import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  /*refactor to handle all changes
  handleTitleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      title: e.target.value
    })
  }
  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }
  handleImgChange = (e) => {
    this.setState({
      img: e.target.value
    })
  }*/

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewBook(this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
      </label>
      <label>
        Author:
        <input type="text" value={this.state.author} name="author" onChange={this.handleChange} />
      </label>
      <label>
        Img Url:
        <input type="text" value={this.state.img} name="img" onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
