import { APIResponse } from "../../../../shared/infra/api-response";
import { LoginDTO } from "../../dtos/login-dto";

export interface IUserService {
  // getCurrentUserProfile (): Promise<User>;
  // createUser (email: string, username: string, password: string): Promise<APIResponse<void>>;
  login(username: string, password: string): Promise<APIResponse<LoginDTO>>;
  // logout (): Promise<APIResponse<void>>;
}
