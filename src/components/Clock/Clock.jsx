import { useState, useEffect, useRef } from "react";
import s from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Это интервал каждые 3000ms " + Date.now());
      setTime(new Date());
    }, 3000);
    return stop();
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={s.container}>
      <button type="button" onClick={() => setTime(new Date())}>
        New state
      </button>
      <p className={s.clockface}>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log("Это интервал каждые 1000ms " + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log("Эот метод вызывается перед размонтированием компонента");
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <p className={s.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
