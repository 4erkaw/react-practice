import s from "./SignUp.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

export default function SignUp() {
  const [email, setEmail] = useLocalStorage("email");
  const [password, setPass] = useLocalStorage("password");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPass(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={s.form} autoComplete="off">
      <label className={s.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={s.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

//  class OldSignupForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (evt) => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={s.form} autoComplete="off">
//         <label className={s.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label className={s.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
