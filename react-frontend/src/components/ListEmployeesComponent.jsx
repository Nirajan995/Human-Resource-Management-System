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

  editEmployee = (id) => {
    this.props.history.push(`/update-employees/${id}`);
  };

  sendSMS = (id) => {
    this.props.history.push(`/sendSms`);
  };

  deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((resp) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={this.addEmployee}
            style={{ marginLeft: "20px" }}
          >
            Add Employee
          </button>
        </div>
        <div className="row">
          <table
            className="table table-striped table-bordered"
            style={{ margin: "20px" }}
          >
            <thead>
              <tr>
                <th>Employee Id</th>
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
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.age}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.phone_no}</td>
                  <td>{employee.hireDate}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-outline-info "
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      type="button"
                      onClick={() => this.sendSMS(employee.id)}
                      className="btn btn-outline-primary "
                    >
                      Send SMS
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      type="button"
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-outline-danger "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
