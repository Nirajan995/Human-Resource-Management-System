import axios from "axios";
import authHeader from "./auth-header";

const Employee_Api_Base_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(Employee_Api_Base_URL, { headers: authHeader() });
  }

  createEmployee(employee) {
    return axios.post(Employee_Api_Base_URL, employee, {
      headers: authHeader(),
    });
  }
}

export default new EmployeeService();
