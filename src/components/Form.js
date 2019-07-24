import React from "react";

class Form extends React.Component {

  state= {
    title: "",
    author: "",
    img: "",
    book: {}
  }

  handleSubmit = () =>  {

       this.setState({
         book: {
          title: this.state.title,
          author: this.state.author,
          img: this.state.img
         }
       })

       //didnt get to finish but lastly to update the books array tahts rendered I would post to the end point to update the array thats being rendered in BookList with the new book created ffrom the form

      //  fetch(`http://localhost:3005/books`, (this.state.book) {
      //    method: 'POST'
      //  })

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>console.log(this.state))

    this.hanldeSubmit()
    
  }

  render() {
    return (<div>
      <form>
        <input 
        name='title' 
        value={this.state.title}
        onChange={this.handleChange }
        placeholder="title"
        />
        <input 
        name="author" 
        value={this.state.author}
        onChange = {
          this.handleChange
        }
        placeholder = "author"
        />
        <input 
        name="img" 
        value={this.state.img}
        onChange={this.handleChange}
        placeholder = "img"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>
    )
  }
}

export default Form;
