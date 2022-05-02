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
// import Form from "./components/Form";

export default class App extends Component {
  state = {
    todoList: items,
  };

  delete = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { todoList } = this.state;
    const total = todoList.length;
    const completed = todoList.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <Container>
        <div>
          <p>Total: {total}</p>
          <p>Completed: {completed}</p>
        </div>
        <TodoList todo={todoList} onDeleteTodo={this.delete} />
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
