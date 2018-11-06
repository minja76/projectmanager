import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject = id => {
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="Project">
        <strong> {this.props.project.id} </strong>-{" "}
        <strong> {this.props.project.title} </strong>:
        {this.props.project.category}
        <a href="#" onClick={() => this.props.onDelete(this.props.project.id)}>
          X
        </a>
      </li>
    );
  }
}

export default ProjectItem;
