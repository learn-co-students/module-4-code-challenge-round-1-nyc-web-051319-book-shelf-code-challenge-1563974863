import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleInput = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewBook(this.state)

    this.setState({
      title: '',
      author: '',
      img: ''
    })

  }

  render() {
    const {title, author, img} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="title" name="title" value={title} placeholder="title" onChange={this.handleInput}/>
        <input type="text" id="author" name="author" value={author} placeholder="author" onChange={this.handleInput}/>
        <input type="text" id="img" name="img" value={img} placeholder="img" onChange={this.handleInput}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
