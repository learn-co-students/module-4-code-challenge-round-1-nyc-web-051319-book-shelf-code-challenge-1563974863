import React from "react";

class Form extends React.Component {
  render() {
    return <h1>
    <form>
    <label>
      Title:
      <input type="text" name="title" placeholder="Title" />
    </label>
    <label>
      Url:
      <input type="text" name="url" placeholder="Image url" />
    </label>

    </form>
    </h1>;
  }
}

export default Form;
