import { Component } from "react";
import Controls from "./Controls";
import Value from "./Value";
import s from "./Counter.module.css";

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  increment = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.container}>
        <Value value={value} />
        <Controls onIncrement={this.increment} onDecrement={this.decrement} />
      </div>
    );
  }
}
