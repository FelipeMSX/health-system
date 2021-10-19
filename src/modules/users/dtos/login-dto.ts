import { JWTToken, RefreshToken } from "../core/models/tokens";

export interface LoginDTO {
  data: LoginDTO;
  accessToken: JWTToken;
  refreshToken: RefreshToken;
}
