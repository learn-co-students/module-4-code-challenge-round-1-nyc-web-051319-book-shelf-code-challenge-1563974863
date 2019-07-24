import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Add A New Book!</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="author"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="img"
            placeholder="img"
            onChange={this.props.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
