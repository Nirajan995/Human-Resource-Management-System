import React, { Component } from "react";
import PayrollService from "../services/PayrollServices.js";

export default class ListPayrollComponent extends Component {
  state = {
    payroll: [],
  };
  componentDidMount() {
    PayrollService.getAllPayrolls().then((resp) => {
      this.setState({ payroll: resp.data });
    });
  }
  render() {
    return (
      <div>
        <h2>Payrolls of employees</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.payroll.map((payroll) => (
              <tr key={payroll.id}>
                <td>{payroll.id}</td>
                <td>{payroll.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
