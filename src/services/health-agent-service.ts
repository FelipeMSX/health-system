import HealthAgentModel from "../model/health-agent-model";
import { IAuthService } from "../modules/users/core/ports/i-auth-service";
import { AuthService } from "../modules/users/infra/adapters/services/auth-service";
import { BaseAPI } from "../shared/infra/api-base";

class HealthAgentService extends BaseAPI {
  constructor(authService: IAuthService) {
    super(authService);
  }
  getAll() {
    return this.get<HealthAgentModel[]>("logradouros/9e562a97-4ace-4aed-9554-ea065e6979ee");
  }

  insert(model: HealthAgentModel) {
    return this.post<HealthAgentModel>("health-agent", model);
  }
}

export default new HealthAgentService(new AuthService());
