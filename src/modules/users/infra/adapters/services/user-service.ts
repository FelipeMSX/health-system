import axios from "axios";
import { left, right } from "../../../../../shared/core/Either";
import { Result } from "../../../../../shared/core/Result";
import { BaseAPI } from "../../../../../shared/infra/api-base";
import { APIResponse } from "../../../../../shared/infra/api-response";
import { User } from "../../../core/models/user";
import { IAuthService } from "../../../core/ports/i-auth-service";
import { IUserService } from "../../../core/ports/i-user-servce";
import { LoginDTO } from "../../../dtos/login-dto";
import { AuthService } from "./auth-service";
class UserService extends BaseAPI implements IUserService {
  constructor(authService: IAuthService) {
    super(authService);
    this.enableInterceptors();
  }

  async login(username: string, password: string): Promise<APIResponse<LoginDTO>> {
    try {
      const response = await this.post<LoginDTO>("users/login", {
        username,
        password,
      });

      const dto: LoginDTO = response.data;
      this.authService.setToken("access-token", dto.accessToken);
      this.authService.setToken("refresh-token", dto.refreshToken);
      return right(Result.ok<LoginDTO>(dto));
    } catch (err: any) {
      return left(err.response ? err.response.data.message : "Connection failed");
    }
  }

  async getCurrentUserProfile(): Promise<APIResponse<User>> {
    try {
      const token = this.authService.getToken("access-token");
      const response = await this.get<User>("/users/me", null, { Authorization: `Bearer ${token}` });
      return right(Result.ok<User>(response.data));
    } catch (err: any) {
      return left(err.response ? err.response.data.message : "Connection failed");
    }
  }

  async refreshUserAccessToken(): Promise<APIResponse<void>> {
    try {
      const token = this.authService.getToken("refresh-token");
      console.log("Refresh Token: " + token);
      const response = await this.post("/users/token/refresh", {
        refreshToken: token,
      });

      const dto: LoginDTO = response.data as LoginDTO;
      this.authService.setToken("access-token", dto.accessToken);

      return right(Result.ok<void>());
    } catch (err: any) {
      return left(err.response ? err.response.data.message : "Connection failed");
    }
  }
}

export default new UserService(new AuthService());
