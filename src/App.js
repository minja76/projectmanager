import React, { Component } from "react";
import uuid from "uuid";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import Todos from "./Components/Todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }

  getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data,
          allTodos: data
        });
      });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject = project => {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects });
  };

  handleDeleteProject = id => {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  };

  handleDeleteTodo = id => {
    //  let todos = this.state.allTodos;
    // let index = todos.findIndex(x => x.id === id);
    //todos.splice(index, 1);
    this.setState({ todos: this.state.todos.filter(x => x.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <Projects
          onDelete={this.handleDeleteProject}
          projects={this.state.projects}
        />
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default App;
