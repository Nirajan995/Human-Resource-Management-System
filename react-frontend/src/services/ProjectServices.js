import axios from "axios";
import authHeader from "./auth-header";

const PROJECTS_API_BASE_URL = "http://localhost:8080/api/v3/projects";

class ProjectServices {
  getProjects() {
    return axios.get(PROJECTS_API_BASE_URL, { headers: authHeader() });
  }
}

export default new ProjectServices();
