import React from "react";

class Form extends React.Component {

  render() {
    return <h1>{/*create form*/}
      <form onSubmit={this.props.handleSubmit} >
      <input
      value={this.props.title}
      name="title"
      placeholder="title"
      type="text"
      onChange={this.props.handleChange}/>
      <input
      value={this.props.author}
      name="author"
      placeholder="author"
      type="text"
      onChange={this.props.handleChange}/>
      <input
      value={this.props.img}
      name="img"
      placeholder="img"
      type="text"
      onChange={this.props.handleChange}/>
      <input type="submit" value="Submit" />
      </form>
    </h1>;
  }
}

export default Form;
