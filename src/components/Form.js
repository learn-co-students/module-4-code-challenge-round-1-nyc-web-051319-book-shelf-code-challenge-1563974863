import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addABook(event, this.state)
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
          <input name="author" value={this.state.author} onChange={this.handleChange} placeholder="author"/>
          <input name="img" value={this.state.img} onChange={this.handleChange} placeholder="image"/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Form;
