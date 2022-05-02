import { Component } from "react";
import s from "./ColorPicker.module.css";

export default class ColorPicker extends Component {
  state = {
    activeOptIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({
      activeOptIdx: index,
    });
  };

  makeOptionClassName = (index) => {
    const optionClasses = [s.option];
    if (index === this.state.activeOptIdx) {
      optionClasses.push(s.active);
    }

    return optionClasses.join(" ");
  };

  render() {
    const { activeOptIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Chosen color: {label.toUpperCase()}</p>
        <div>
          {options.map(({ id, color }, index) => (
            <button
              key={id}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
