import { Component } from "react";
class Welcome extends Component {
  state = { color: "red" };

  render() {
    const { color } = this.state;
    return (
      <div>
        <h1>my car color is {color}</h1>
        <button
          onClick={() => {
            this.setState({ color: "blue" });
          }}
        >
          change color
        </button>
      </div>
    );
  }
}
export default Welcome;
