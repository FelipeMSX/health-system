import { JWTToken, RefreshToken } from "../core/models/tokens";

export interface LoginDTO {
  accessToken: JWTToken;
  refreshToken: RefreshToken;
}
