import { useState, useEffect } from "react";
import s from "./Counter.module.css";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((state) => state + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB((state) => state + 1);
  };

  useEffect(() => {
    console.log("Calling useEffect");
    document.title = `Total clicks: ${counterA + counterB}`;
  }, [counterA, counterB]);

  return (
    <div className={s.container}>
      <button className={s.btn} type="button" onClick={handleCounterAIncrement}>
        Кликнули counterA {counterA} раз
      </button>

      <button className={s.btn} type="button" onClick={handleCounterBIncrement}>
        Кликнули counterB {counterB} раз
      </button>
    </div>
  );
}

// onIncrement={this.increment} onDecrement={this.decrement}

// class OldCounter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   increment = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + 1,
//     }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className={s.container}>
//         <Value value={value} />
//         <Controls onIncrement={this.increment} onDecrement={this.decrement} />
//       </div>
//     );
//   }
// }
