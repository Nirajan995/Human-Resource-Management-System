import React, { Component } from "react";
import "react-phone-number-input/style.css";
import SmsServices from "../../services/SmsServices.js";

export default class SmsBoard extends Component {
  state = {
    phoneNumber: "",
    message: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let sms = {
      phoneNumber: this.state.phoneNumber,
      message: this.state.message,
    };
    console.log(sms);
    SmsServices.postSms(sms).then(() => {
      this.props.history.push("/employees");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h2>Send SMS to employee</h2>
            <div className="form-group">
              <label>Enter Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="+977 XXXXXXXXXX"
              />
            </div>
            <div className="form-group">
              <label>Enter the message:</label>
              <textarea
                name="message"
                placeholder="Enter message here:"
                row="3"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <button class="btn btn-outline-success">Send SMS</button>
          </div>
        </form>
      </div>
    );
  }
}
