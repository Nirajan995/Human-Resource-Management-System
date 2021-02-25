import React, { Component } from "react";
import PredictionService from "../../services/PredictionService";

export default class PredictionComponentPost extends Component {
  state = {
    behaviourWithColleagues: "",
    levelOfCreativity: "",
    attendance: "",
    projectPunctuality: "",
    projectQuality: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let predictionComponents = {
      behaviourWithColleagues: this.state.behaviourWithColleagues,
      levelOfCreativity: this.state.levelOfCreativity,
      attendance: this.state.attendance,
      projectPunctuality: this.state.projectPunctuality,
      projectQuality: this.state.projectQuality,
    };
    console.log(predictionComponents);
    PredictionService.postPrediction(predictionComponents).then((resp) => {
      this.props.history.push("/prediction");
    });
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Prediction Components</h2>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>Behaviour with Colleagues :</label>
              <select
                name="behaviourWithColleagues"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Highly_Cooperative">Highly_Cooperative</option>
                <option value="Cooperative">Cooperative</option>
                <option value="Less_Cooperative">Less_Cooperative</option>
                <option value="Not_Cooperative">Not_Cooperative</option>
              </select>
            </div>
            <div class="form-group">
              <label>Level of creativity :</label>
              <select
                name="levelOfCreativity"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Highly_Creative">Highly_Creative</option>
                <option value="Creative">Creative</option>
                <option value="Less_Creative">Less_Creative</option>
                <option value="Not_Creative">Not_Creative</option>
              </select>
            </div>
            <div class="form-group">
              <label>Attendance :</label>
              <select
                name="attendance"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Mostly_Present">Mostly_Present</option>
                <option value="Sometimes_Absent">Sometimes_Absent</option>
                <option value="Frequently_Absent">Frequently_Absent</option>
                <option value="Rarely_Absent">Rarely_Absent</option>
              </select>
            </div>
            <div class="form-group">
              <label>Project Punctuality :</label>
              <select
                name="projectPunctuality"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="OnTime">OnTime</option>
                <option value="Occasionally_Late">Occasionally_Late</option>
                <option value="Rarely_Late">Rarely_Late</option>
                <option value="Mostly_Late">Mostly_Late</option>
              </select>
            </div>
            <div class="form-group">
              <label>Project Quality :</label>
              <select
                name="projectQuality"
                class="form-control"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Beyond_Expectation">Beyond_Expectation</option>
                <option value="As_Expected">As_Expected</option>
                <option value="Little_Below_Expectation">
                  Little_Below_Expectation
                </option>
                <option value="Below_Expectation">Below_Expectation</option>
              </select>
            </div>
            <button class="btn btn-outline-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
