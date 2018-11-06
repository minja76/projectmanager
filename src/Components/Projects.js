import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem
            onDelete={this.props.onDelete}
            key={project.title}
            project={project}
          />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
