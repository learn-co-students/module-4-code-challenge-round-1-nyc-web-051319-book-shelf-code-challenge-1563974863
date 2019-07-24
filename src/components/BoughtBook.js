import React from "react";

class BoughtBook extends React.Component {

  state = {
    clicked: false
  }

  removeBook = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.clicked ?
          null
          :
          <div onClick={this.removeBook}>
            <h2>{this.props.title}</h2>
            <img src={this.props.imgUrl} alt="oops!"/>
          </div>
        }
      </div>
    )
  }
}

export default BoughtBook;
