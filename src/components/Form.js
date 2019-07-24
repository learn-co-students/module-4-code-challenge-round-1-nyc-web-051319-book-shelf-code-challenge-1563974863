import React from "react";

const Form = props => {
    return (
      <div>
      <h1>Add Book</h1>
        <form>
            <input onChange={props.handleChange} placeholder="name" type="text" name="name" />
            <input onChange={props.handleChange} placeholder="author" type="text" name="author" />
            <input onChange={props.handleChange} placeholder="img" type="text" name="image" />
            <input onClick={props.onSubmit} type="submit" value="Submit" />
          </form>
      </div>
    )
}


export default Form;
