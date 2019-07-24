import React from "react";


class Form extends React.Component {
  state = {
    id:'',
    title:'',
    author:'',
    img:''
  }

  handleSubmit = (event) => {
    this.props.addNewBook(this.state)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      author: event.target.value,
      img: event.target.value
    });
  }
  render() {
    return <h1>{<form onSubmit={this.handleSubmit}>
      <label>
        Title:
          <input name="title" type="text" value={this.state.value} onSubmit={this.handleChange} />
      </label>
      <label>
        Author:
          <input name="author" type="text" value={this.state.value} onSubmit={this.handleChange} />
      </label>
      <label>
        Img:
          <input name="img" type="text" value={this.state.value} onSubmit={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>}</h1>;

    
  }
}

export default Form;
