import { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    license: false,
  };

  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  checkbox = (e) => {
    const { checked } = e.currentTarget;
    this.setState({
      license: checked,
    });
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    const { name, tag, experience, license } = this.state;
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.inputChange}
          ></input>
        </label>
        <label htmlFor="">
          Nickname
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.inputChange}
          ></input>
        </label>
        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={experience === "junior"}
            onChange={this.inputChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={experience === "middle"}
            onChange={this.inputChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={experience === "senior"}
            onChange={this.inputChange}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            checked={license}
            onChange={this.checkbox}
          />{" "}
          Accept terms
        </label>
        <br />
        <button type="submit" disabled={!license}>
          Send
        </button>
      </form>
    );
  }
}
