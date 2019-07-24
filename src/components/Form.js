import React, {Fragment} from "react";

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
    this.props.addNewBook(this.state)
  }
  render() {
    return (
      <Fragment>
        <h3>Add A New Book</h3>
        <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} name="title" onChange={this.handleChange} placeholder="title"/>
        </label>
        <label>
          Author:
          <input type="text" value={this.state.author} name="author" onChange={this.handleChange} placeholder="author"/>
        </label>
        <label>
          Img Url:
          <input type="text" value={this.state.img} name="img" onChange={this.handleChange} placeholder="Img URL"/>
        </label>
        <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )
  }
}

export default Form;
