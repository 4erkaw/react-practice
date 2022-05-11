import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [experience, setExperience] = useState("junior");
  const [license, setLicense] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "tag":
        setTag(value);
        break;
      case "experience":
        setExperience(value);
        break;
      default:
        throw new Error("BAN");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    setName("");
    setTag("");
  };

  const checkbox = (e) => {
    const { checked } = e.currentTarget;
    setLicense(checked);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
        ></input>
      </label>
      <label htmlFor="">
        Nickname
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={inputChange}
        ></input>
      </label>
      <p>Your level:</p>
      <label>
        <input
          type="radio"
          name="experience"
          value="junior"
          checked={experience === "junior"}
          onChange={inputChange}
        />
        Junior
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="middle"
          checked={experience === "middle"}
          onChange={inputChange}
        />
        Middle
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="senior"
          checked={experience === "senior"}
          onChange={inputChange}
        />
        Senior
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="license"
          checked={license}
          onChange={checkbox}
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

// export default class Form extends Component {
//   state = {
//     name: "",
//     tag: "",
//     experience: "junior",
//     license: false,
//   };

//   inputChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   submit = (e) => {
//     e.preventDefault();
//     this.props.onFormSubmit(this.state);
//     this.reset();
//   };

//   checkbox = (e) => {
//     const { checked } = e.currentTarget;
//     this.setState({
//       license: checked,
//     });
//   };

//   reset = () => {
//     this.setState({ name: "", tag: "" });
//   };

//   render() {
//     const { name, tag, experience, license } = this.state;
//     return (
//       <form onSubmit={this.submit}>
//         <label htmlFor="">
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.inputChange}
//           ></input>
//         </label>
//         <label htmlFor="">
//           Nickname
//           <input
//             type="text"
//             name="tag"
//             value={tag}
//             onChange={this.inputChange}
//           ></input>
//         </label>
//         <p>Your level:</p>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//             checked={experience === "junior"}
//             onChange={this.inputChange}
//           />
//           Junior
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="middle"
//             checked={experience === "middle"}
//             onChange={this.inputChange}
//           />
//           Middle
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="senior"
//             checked={experience === "senior"}
//             onChange={this.inputChange}
//           />
//           Senior
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="license"
//             checked={license}
//             onChange={this.checkbox}
//           />{" "}
//           Accept terms
//         </label>
//         <br />
//         <button type="submit" disabled={!license}>
//           Send
//         </button>
//       </form>
//     );
//   }
// }
