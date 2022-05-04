import { Component } from "react";
import Container from "./components/Container";
// import PaintingList from "./components/Painting";
// import paintings from "./components/Painting/paintings.json";
// import ColorPicker from "./components/ColorPicker";
// import colors from "./components/ColorPicker/colors.json";
// import Alert from "./components/Alert";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
// import Form from "./components/Form";
import Modal from "./components/Modal";
import Clock from "./components/Clock";
import shortid from "shortid";

export default class App extends Component {
  state = {
    todoList: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem("todoList");
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({
        todoList: parsedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoList !== prevState.todoList) {
      console.log("Update todo");
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    }
  }

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState(({ todoList }) => ({
      todoList: [...todoList, todo],
    }));
  };

  delete = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== todoId),
    }));
  };

  completedCount = () => {
    const { todoList } = this.state;
    return todoList.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  getVisibleTodo = () => {
    const { todoList, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return todoList.filter(({ text }) =>
      text.toLowerCase().includes(toLowerCaseFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todoList, filter, showModal } = this.state;
    const total = todoList.length;
    const completed = this.completedCount();
    const filtered = this.getVisibleTodo();
    return (
      <Container>
        {showModal && <Clock />}
        <button type="button" onClick={this.toggleModal}>
          Open clock
        </button>
      </Container>
    );
  }
}
/* <Form onFormSubmit={this.formSubmitHandler} /> */
/* <div>
          <p>Total: {total}</p>
          <p>Completed: {completed}</p>
        </div>
        <TodoList todo={todoList} onDeleteTodo={this.delete} /> */
/* <ColorPicker options={colors} />
<Dropdown />
<Alert text="WARNING" type="warning" />
<Counter />
<PaintingList items={paintings} /> */

/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Pidoras</h1>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
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
