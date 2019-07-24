import React from "react";

class Form extends React.Component {
  
  // handleChange = (e) => {
  //   [e.target.name]: e.target.value
  // }
  handleChange = (e) => {
    // GRAB VALUES HERE
    // create Book prop will grab those values, send up to app.js to add a new book
    // onto books array

    //ran out of time ;(
  }

  render() {

    return(
    <div>
      <h1>Stupid form</h1>
      <form onChange={this.handleChange}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="img" placeholder="Image URL" />
        <input type="submit" value="Submit" onSubmit={this.props.createBook()}/>
      </form>
    </div> )
  }
}

export default Form;
