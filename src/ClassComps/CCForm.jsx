import React, { Component } from "react";

class CCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg1: false,
      errorMsg2: false,
      errorMsg3: false,
      Grade: "",
    };
  }

  pStyleDisplay = {
    color: "red",
    fontSize: 12,
    margin: 2,
  };

  displayRequired = (e) => {
    switch (e.target.name) {
      case "Last Name":
        this.setState({ errorMsg1: true });
        break;
      case "First Name":
        this.setState({ errorMsg2: true });
        break;
      case "SAT Grade":
        this.setState({ errorMsg3: true });
        break;
      default:
        break;
    }
  };

  hideRequired = (e) => {
    switch (e.target.name) {
      case "Last Name":
        this.setState({ errorMsg1: false });
        break;
      case "First Name":
        this.setState({ errorMsg2: false });
        break;
      case "SAT Grade":
        this.setState({ errorMsg3: false });
        break;
      default:
        break;
    }
  };

  checkGrade = (e) => {
    let gr = parseInt(e.target.value);
    if (gr >= 200 && gr <= 800) {
      // grades can be 200 - 800
      console.log(gr);
      if (gr > 555) {
        this.setState({ Grade: "Good news! you can start your degree 😁" });
        console.log(this.state.Grade);
      } else {
        this.setState({ Grade: "Bad news! try again next year 😒" });
        console.log(this.state.Grade);
      }
    } else this.setState({ Grade: "" });
  };

  render() {
    return (
      <form
        action=""
        style={{ border: "1px solid darkblue", margin: 20, padding: 15 }}
      >
        <h3>Application Form</h3>
        <br />
        <p
          style={{
            color: "red",
            fontSize: 12,
            margin: 0,
            display: this.state.errorMsg1 ? "block" : "none",
          }}
        >
          *Please enter Last Name.
        </p>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="Last Name"
          id="lastName"
          onFocus={this.displayRequired}
          onBlur={this.hideRequired}
        />
        <br />
        <br />
        <p
          style={{
            color: "red",
            fontSize: 12,
            margin: 0,
            display: this.state.errorMsg2 ? "block" : "none",
          }}
        >
          *Please enter First Name.
        </p>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="First Name"
          id="firstName"
          onFocus={this.displayRequired}
          onBlur={this.hideRequired}
        />
        <br />
        <br />
        <p
          style={{
            color: "red",
            fontSize: 12,
            margin: 0,
            display: this.state.errorMsg3 ? "block" : "none",
          }}
        >
          *Please enter SAT Grade.
        </p>
        <label htmlFor="SATGrade">SAT Grade: </label>
        <input
          type="text"
          name="SAT Grade"
          id="SATGrade"
          maxLength={3}
          onFocus={this.displayRequired}
          onKeyUp={this.checkGrade}
          onBlur={this.hideRequired}
        />
        <p style={{ display: this.state.Grade ? "block" : "none" }}>
          {this.state.Grade}
        </p>
        <br />
        <br />
      </form>
    );
  }
}

export default CCForm;
