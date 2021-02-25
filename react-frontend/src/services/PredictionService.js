import axios from "axios";
import authHeader from "./auth-header";

const Employee_Api_Base_URL = "http://localhost:8080/prediction/employees";

class EmployeeService {
  getPrediction() {
    return axios.get(Employee_Api_Base_URL, {
      headers: authHeader(),
    });
  }
  postPrediction(predictionComponents) {
    return axios.post(Employee_Api_Base_URL, predictionComponents, {
      headers: authHeader(),
    });
  }
}

export default new EmployeeService();
