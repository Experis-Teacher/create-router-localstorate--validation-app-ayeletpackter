import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidName:''
    };
  }

  saveName(e) {
    console.log("gggggggg")
    localStorage["name"] = e.target.value;
  }

  navigate = () => {
    const regex = /[A-Z]/i;
    if(regex.test(localStorage.getItem("name")))
    this.props.history.push("/contact");
else
this.setState({invalidName:"invalid name"})
      
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        {this.state.invalidName}
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
