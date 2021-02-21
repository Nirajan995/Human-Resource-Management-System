import axios from "axios";

const Employee_Api_Base_URL = "http://localhost:8080/prediction/employees";

class EmployeeService {
  getPrediction() {
    return axios.get(Employee_Api_Base_URL);
  }
}

export default new EmployeeService();
