import { Component } from "react";

export default class CCColors extends Component {
  constructor(props) {
    super(props);
    this.color = this.props.color;

    this.state = {
      color: this.props.color,
    };
  }

  changeColor = (e) => {
    console.log(e.target.value);
    this.setState({ color: e.target.value });
  };

  render() {
    const btnStyle = {
      backgroundColor: "lightgray",
      margin: "10px",
    };

    return (
      <div
        style={{
          backgroundColor: this.state.color,
          padding: 15,
          border: "1px solid darkblue",
        }}
      >
        <button
          id="btnGreen"
          style={btnStyle}
          onClick={this.changeColor}
          value={"Green"}
        >
          Green
        </button>
        <br />
        <button
          id="btnYellow"
          style={btnStyle}
          onClick={this.changeColor}
          value={"yellow"}
        >
          Yellow
        </button>
        <br />
        <button
          id="btnRed"
          style={btnStyle}
          onClick={this.changeColor}
          value={"red"}
        >
          Red
        </button>
        <br />
        <button
          id="btnPink"
          style={btnStyle}
          onClick={this.changeColor}
          value={"pink"}
        >
          Pink
        </button>
        <br />
        <button
          id="btnOrange"
          style={btnStyle}
          onClick={this.changeColor}
          value={"orange"}
        >
          Orange
        </button>
        <br />
        <button
          id="btnBlue"
          style={btnStyle}
          onClick={this.changeColor}
          value={"blue"}
        >
          Blue
        </button>
        <br />
        <button
          id="btnGray"
          style={btnStyle}
          onClick={this.changeColor}
          value={"gray"}
        >
          Gray
        </button>
        <br />
        <button
          id="btnBeige"
          style={btnStyle}
          onClick={this.changeColor}
          value={"beige"}
        >
          Beige
        </button>
        <br />
      </div>
    );
  }
}
