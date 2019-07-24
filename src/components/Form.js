import React from "react";

class Form extends React.Component {
  render() {
    const { title, author, img, addBookToList, handleFormChanges } = this.props

    return (
      <form onSubmit={addBookToList}>
        <input type="text" placeholder="title" name="title" value={title} onChange={handleFormChanges} />
        <input type="text" placeholder="author" name="author" value={author} onChange={handleFormChanges} />
        <input type="text" placeholder="img" name="img" value={img} onChange={handleFormChanges} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
