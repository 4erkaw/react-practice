import { useState } from "react";
import s from "./Dropdown.module.css";

export default function Dropdown() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={s.container}>
      <button type="button" className="toggle" onClick={toggle}>
        {visible ? "HIDE" : "SHOW"}
      </button>
      {visible && <div className={s.menu}>Menu</div>}
    </div>
  );
}

// export default class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState((prevState) => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     const { visible } = this.state;
//     return (
//       <div className={s.container}>
//         <button type="button" className="toggle" onClick={this.toggle}>
//           {visible ? "HIDE" : "SHOW"}
//         </button>
//         {visible && <div className={s.menu}>Menu</div>}
//       </div>
//     );
//   }
// }
