import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidPhone:''
    };
  }

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate  = () => {
    const regex = /05[\d]{1}-[\d]{7}/;
    if(regex.test(localStorage.getItem("phone")))
    this.props.history.push("/finish");
else
this.setState({invalidPhone:"invalid phone"})

  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your phone"
          className="phone"
          onBlur={this.savePhone}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
