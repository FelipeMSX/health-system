import api from "../../../../../services/api";
import { left, right } from "../../../../../shared/core/Either";
import { Result } from "../../../../../shared/core/Result";
import { APIResponse } from "../../../../../shared/infra/api-response";
import { IAuthService } from "../../../core/ports/i-auth-service";
import { IUserService } from "../../../core/ports/i-user-servce";
import { LoginDTO } from "../../../dtos/login-dto";
import { AuthService } from "./auth-service";

class UserService implements IUserService {
  private authService: IAuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(username: string, password: string): Promise<APIResponse<LoginDTO>> {
    try {
      const response = await api.post<LoginDTO>("users/login", {
        username,
        password,
      });
      const dto: LoginDTO = response.data as LoginDTO;
      this.authService.setToken("access-token", dto.accessToken);
      this.authService.setToken("refresh-token", dto.refreshToken);
      return right(Result.ok<LoginDTO>(dto));
    } catch (err: any) {
      return left(err.response ? err.response.data.message : "Connection failed");
    }
  }
}

export default new UserService();
