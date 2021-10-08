import HealthAgentModel from "../model/health-agent-model";
import api from "./api";

class HealthAgentService {
  getAll() {
    return api.get<HealthAgentModel[]>("logradouros/9e562a97-4ace-4aed-9554-ea065e6979ee");
  }

  insert(model: HealthAgentModel) {
    return api.post<HealthAgentModel>("health-agent", model);
  }
}

export default new HealthAgentService();
