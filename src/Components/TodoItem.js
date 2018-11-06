import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className="TodoItem">
        <strong>
          {" "}
          {this.props.todo.id} - {this.props.todo.title}{" "}
          <a href="#" onClick={() => this.props.onDelete(this.props.todo.id)}>
            X
          </a>
        </strong>
      </li>
    );
  }
}

export default TodoItem;
