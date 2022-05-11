import { useReducer } from "react";
import s from "./Counter.module.css";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error("Unsuported action.type");
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className={s.container}>
      <p className={s.value}>{state.count}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Увеличить
      </button>

      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Уменьшить
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
