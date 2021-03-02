import React, { Component } from "react";
import ProjectServices from "../services/ProjectServices.js";

export default class ListProjects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    ProjectServices.getProjects().then((resp) => {
      this.setState({ projects: resp.data });
    });
  }
  render() {
    return (
      <div>
        <h2>Projects of employees</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Projects Done by Employees</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.projects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
