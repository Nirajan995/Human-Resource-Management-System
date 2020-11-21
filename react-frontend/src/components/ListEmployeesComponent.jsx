import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService.js";

export default class ListEmployeesComponent extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    EmployeeService.getEmployees().then((resp) => {
      this.setState({ employees: resp.data });
    });
  }

  addEmployee = () => {
    this.props.history.push("/add-employees");
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee last Name</th>
                <th>Employee Age</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Hire Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.age}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.phone_no}</td>
                  <td>{employee.hireDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
