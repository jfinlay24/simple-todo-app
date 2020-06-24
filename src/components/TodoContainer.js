import React from "react"
import Header from "./Header"
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };
  
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
        {/*<h1>Simple ToDo App</h1>
        <p>Please add to-dos item(s) through the input field</p>
        {this.state.todos.map(todo => (
          <li>{todo.title}</li>
        ))}*/}
      </div>
    )
  }
}
export default TodoContainer