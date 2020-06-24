import React from 'react'
import TodoItem from "./TodoItem";

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>
  }
}

export default TodoItem