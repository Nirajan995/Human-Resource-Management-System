import React, { Component } from "react";
import PredictionService from "../../services/PredictionService";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

export default class PredictionComponent extends Component {
  state = {
    prediction: [],
    dataValues: [],
  };

  componentDidMount() {
    PredictionService.getPrediction().then((resp) => {
      this.setState({ prediction: resp.data });
      this.setState({ dataValues: Object.values(this.state.prediction) });
    });
  }

  render() {
    const data = {
      labels: ["P(bad)", "P(Best)", "P(Better)", "P(Ok)"],
      datasets: [
        {
          label: "Performance Prediction of Employees",
          data: [
            this.state.dataValues[0],
            this.state.dataValues[1],
            this.state.dataValues[2],
            this.state.dataValues[3],
          ],
          borderColor: ["rgba(189, 195, 199, 1)"],
          backgroundColor: ["rgba(218, 223, 225, 1)"],
          pointBackgroundColor: "rgba(46, 49, 49, 1)",
          pointBorderColor: "rgba(189, 195, 199, 1)",
        },
      ],
    };

    const datas = {
      labels: ["P(bad)", "P(Best)", "P(Better)", "P(Ok)"],
      datasets: [
        {
          label: "Performance Prediction of Employees",
          data: [
            this.state.dataValues[0],
            this.state.dataValues[1],
            this.state.dataValues[2],
            this.state.dataValues[3],
          ],
          borderColor: [
            "rgba(36, 37, 42, 1)",
            "rgba(36, 37, 42, 1)",
            "rgba(36, 37, 42, 1)",
            "rgba(36, 37, 42, 1)",
          ],
          backgroundColor: [
            "rgba(207, 0, 15, 1)",
            "rgba(207, 0, 15, 1)",
            "rgba(207, 0, 15, 1)",
            "rgba(207, 0, 15, 1)",
          ],
        },
      ],
    };
    const options = {
      title: {
        display: true,
        text: "Line Chart",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 1,
              stepSize: 0.1,
            },
          },
        ],
      },
    };
    const option = {
      title: {
        display: true,
        text: "Line Chart",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 1,
              stepSize: 0.01,
            },
          },
        ],
      },
    };

    const getData = () => {
      const arr = Object.values(this.state.prediction);
      return arr;
    };

    return (
      <div>
        {console.log(this.state.dataValues)}
        <h2>Predicted Data</h2>
        <div className="row">
          <table
            className="table table-striped table-bordered"
            style={{ margin: "20px" }}
          >
            <thead>
              <tr>
                {this.state.dataValues ? (
                  <h1>{JSON.stringify(this.state.dataValues)}</h1>
                ) : (
                  ""
                )}
                <th>{JSON.stringify(this.state.prediction)}</th>
                <th>Employee Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <div>
              <Line data={data} options={options} />
              <Bar data={datas} options={option} />
            </div>
          </table>
        </div>
      </div>
    );
  }
}
