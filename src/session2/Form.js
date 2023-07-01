import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Text:</label>
          <input type="text" value={text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <h2>{text}</h2>
      </div>
    );
  }
}

export default Form;
