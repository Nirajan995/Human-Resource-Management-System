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
          label: "Performance Prediction of Employees in percentage(%)",
          data: [
            this.state.dataValues[0] * 100,
            this.state.dataValues[1] * 100,
            this.state.dataValues[2] * 100,
            this.state.dataValues[3] * 100,
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
          label: "Performance Prediction of Employees in percentage(%)",
          data: [
            this.state.dataValues[0] * 100,
            this.state.dataValues[1] * 100,
            this.state.dataValues[2] * 100,
            this.state.dataValues[3] * 100,
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
              max: 100,
              stepSize: 10,
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
              max: 100,
              stepSize: 10,
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
      <div className="container">
        <div>
          <Line data={data} options={options} />
        </div>
        <div>
          <Bar data={datas} options={option} />
        </div>
      </div>
    );
  }
}
