import HealthAgentModel from "../model/health-agent-model";
import api from "./api";

class HealthAgentService {
  getAll() {
    return api.get<HealthAgentModel[]>("health-agent");
  }

  insert(model: HealthAgentModel) {
    return api.post<HealthAgentModel>("health-agent", model);
  }
}

export default new HealthAgentService();
