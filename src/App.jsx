// import { useState } from "react";
// import SignUp from "./components/SignUp";
import Container from "./components/Container";
// import PokemonInfo from "./components/Pokemon";
// import PokemonForm from "./components/Pokemon/PokemonForm";
// import PaintingList from "./components/Painting";
// import paintings from "./components/Painting/paintings.json";
// import ColorPicker from "./components/ColorPicker";
// import colors from "./components/ColorPicker/colors.json";
// import Alert from "./components/Alert";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import TodoList from "./components/TodoList";
// import TodoEditor from "./components/TodoEditor";
// import Filter from "./components/Filter";
import Form from "./components/Form";
// import Modal from "./components/Modal";
// import Clock from "./components/Clock";
// import Friends from "./components/Friends";
// import shortid from "shortid";

export default function App() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

// export default class App extends Component {
//   state = {
//     pokemonName: "",
//   };
//   handleFormSubmit = (pokemonName) => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <Container>
//         <PokemonForm onSubmit={this.handleFormSubmit}></PokemonForm>
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//       </Container>
//     );
//   }
// }

/* <ToastContainer autoClose={3000} /> */
// state = {
//   pokemon: null,
//   loading: false,
// };
// componentDidMount() {
//   this.setState({
//     loading: true,
//   });
//   fetch(API)
//     .then((res) => res.json())
//     .then((pokemon) => this.setState({ pokemon }))
//     .finally(() => {
//       this.setState({
//         loading: false,
//       });
//     });
// }

// MY APP 1-5 //
// export default class App extends Component {
//   state = {
//     todoList: [],
//     filter: "",
//     showModal: false,
//   };

//   componentDidMount() {
//     const todos = localStorage.getItem("todoList");
//     const parsedTodos = JSON.parse(todos);
//     if (parsedTodos) {
//       this.setState({
//         todoList: parsedTodos,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todoList !== prevState.todoList) {
//       localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
//     }

//     if (this.state.todoList.length > prevState.todoList.length) {
//       this.toggleModal();
//     }
//   }

//   addTodo = (text) => {
//     const todo = {
//       id: shortid.generate(),
//       text: text,
//       completed: false,
//     };

//     this.setState(({ todoList }) => ({
//       todoList: [...todoList, todo],
//     }));
//   };

//   delete = (todoId) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.filter((todo) => todo.id !== todoId),
//     }));
//   };

//   completedCount = () => {
//     const { todoList } = this.state;
//     return todoList.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   toggleCompleted = (todoId) => {
//     this.setState(({ todoList }) => ({
//       todoList: todoList.map((todo) =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   formSubmitHandler = (data) => {
//     console.log(data);
//   };

//   getVisibleTodo = () => {
//     const { todoList, filter } = this.state;
//     const toLowerCaseFilter = filter.toLowerCase();
//     return todoList.filter(({ text }) =>
//       text.toLowerCase().includes(toLowerCaseFilter)
//     );
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { todoList, filter, showModal } = this.state;
//     const total = todoList.length;
//     const completed = this.completedCount();
//     const filtered = this.getVisibleTodo();
//     return (
//       <Container>
//         <div>
//           <p>Total: {total}</p>
//           <p>Completed: {completed}</p>
//         </div>
//         <button type="button" onClick={this.toggleModal}>
//           Open modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSubmit={this.addTodo} />
//             <button type="button" onClick={this.toggleModal}>
//               Close
//             </button>
//           </Modal>
//         )}
//         <Filter value={filter} onChange={this.changeFilter} />
//         <TodoList
//           todo={filtered}
//           onDeleteTodo={this.delete}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </Container>
//     );
//   }
// }

/* <Form onFormSubmit={this.formSubmitHandler} /> */
/* <ColorPicker options={colors} />
<Dropdown />
<Alert text="WARNING" type="warning" />
<Counter />
<PaintingList items={paintings} /> */

/* 
        <div>
          <p>Total: {total}</p>
          <p>Completed: {completed}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todo={filtered}
          onDeleteTodo={this.delete}
          onToggleCompleted={this.toggleCompleted}
        /> */

//POKEMONU-----------

// handleFormSubmit = (pokemonName) => {
//   this.setState({ pokemonName });
// };
