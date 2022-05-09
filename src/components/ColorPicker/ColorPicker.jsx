import { useState } from "react";
import s from "./ColorPicker.module.css";

export default function ColorPicker({ options }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // const { label } = options[activeIdx];

  const makeOptionClassName = (index) => {
    return activeIdx === index ? s.active : s.option;
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <p>Chosen color: {options[activeIdx].label.toUpperCase()}</p>
      <div>
        {options.map(({ id, color }, index) => (
          <button
            key={id}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

// class OldColorPicker extends PureComponent {
//   state = {
//     activeOptIdx: 0,
//   };

//   setActiveIdx = (index) => {
//     this.setState({
//       activeOptIdx: index,
//     });
//   };

//   makeOptionClassName = (index) => {
//     const optionClasses = [s.option];
//     if (index === this.state.activeOptIdx) {
//       optionClasses.push(s.active);
//     }

//     return optionClasses.join(" ");
//   };

//   render() {
//     const { activeOptIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptIdx];

//     return (
//       <div className={s.container}>
//         <h2 className={s.title}>Color Picker</h2>
//         <p>Chosen color: {label.toUpperCase()}</p>
//         <div>
//           {options.map(({ id, color }, index) => (
//             <button
//               key={id}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
