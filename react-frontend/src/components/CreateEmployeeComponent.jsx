import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";
export default class CreateEmployeeComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    address: "",
    phone_no: "",
    hireDate: "",
  };

  changeEventHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveEmployees = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      email: this.state.email,
      address: this.state.address,
      phone_no: this.state.phone_no,
      hireDate: this.state.hireDate,
    };
    console.log("employee=>" + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then((resp) => {
      this.props.history.push("/employees");
    });
  };
  cancel = () => {
    this.props.history.push("/admin/viewEmployees");
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Add Employee</h3>
        <Form style={{ margin: "20px" }}>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.changeEventHandler}
              ></input>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.changeEventHandler}
              ></input>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <input
                placeholder="Email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.changeEventHandler}
              ></input>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <input
                placeholder="Age"
                name="age"
                className="form-control"
                value={this.state.age}
                onChange={this.changeEventHandler}
              ></input>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <input
              placeholder="Address"
              name="address"
              className="form-control"
              value={this.state.address}
              onChange={this.changeEventHandler}
            ></input>
          </Form.Group>

          <Form.Group controlId="formGridPhoneno">
            <Form.Label>Phone Number</Form.Label>
            <input
              placeholder="9802312345"
              name="phone_no"
              className="form-control"
              value={this.state.phone_no}
              onChange={this.changeEventHandler}
            ></input>
          </Form.Group>

          <Form.Group controlId="formGridHiredate">
            <Form.Label>Hire Date</Form.Label>
            <input
              placeholder="XXXX-XX-XX"
              name="hireDate"
              className="form-control"
              value={this.state.hireDate}
              onChange={this.changeEventHandler}
            ></input>
          </Form.Group>
          <button className="btn btn-success" onClick={this.saveEmployees}>
            Submit
          </button>
          <button
            className="btn btn-danger"
            style={{ marginLeft: "15px" }}
            onClick={this.cancel}
          >
            Cancel
          </button>
        </Form>
      </div>
    );
  }
}
