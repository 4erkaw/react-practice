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
import items from "./components/TodoList/todo.json";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
// import Form from "./components/Form";
import shortid from "shortid";

export default class App extends Component {
  state = {
    todoList: items,
    filter: "",
  };

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

  render() {
    const { todoList, filter } = this.state;
    const total = todoList.length;
    const completed = this.completedCount();
    const filtered = this.getVisibleTodo();
    return (
      <Container>
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
        />
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
