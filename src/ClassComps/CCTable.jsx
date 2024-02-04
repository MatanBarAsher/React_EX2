import { Component } from "react";

export default class CCTable extends Component {
  constructor(props) {
    super(props);

    this.style = this.props.style;

    this.state = {
      style: this.props.style,
    };
  }

  changeWidthTo100 = () => {
    this.setState({ style: "width100" });
  };

  changeWidthTo50 = () => {
    this.setState({ style: "width50" });
  };

  render() {
    return (
      <table
        onClick={this.changeWidthTo100}
        onDoubleClick={this.changeWidthTo50}
        className={this.state.style}
      >
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
