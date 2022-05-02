import { Component } from "react";
import s from "./Dropdown.module.css";

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={s.container}>
        <button type="button" className="toggle" onClick={this.toggle}>
          {visible ? "HIDE" : "SHOW"}
        </button>
        {visible && <div className={s.menu}>Menu</div>}
      </div>
    );
  }
}
