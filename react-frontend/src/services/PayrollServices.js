import axios from "axios";
import authHeader from "./auth-header";

const PAYROLL_API_BASE_URL = "http://localhost:8080/api/v2/payrolls";

class PayrollServices {
  getAllPayrolls() {
    return axios.get(PAYROLL_API_BASE_URL, { headers: authHeader() });
  }
}

export default new PayrollServices();
