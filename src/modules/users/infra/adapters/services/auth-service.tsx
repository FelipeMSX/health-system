import { JWTToken, RefreshToken } from "../../../core/models/tokens";
import { IAuthService } from "../../../core/ports/i-auth-service";

type TokenType = "access-token" | "refresh-token";

export enum TokenTypes {
  AccessToken = "access-token",
  RefreshToken = "refresh-token",
}

export class AuthService implements IAuthService {
  public static accessTokenName: string = "lazarus-access-token";
  public static refreshTokenName: string = "lazarus-refresh-token";

  public accessToken: JWTToken;
  public refreshToken: RefreshToken;

  constructor() {
    this.accessToken = this.getToken(TokenTypes.AccessToken);
    this.refreshToken = this.getToken(TokenTypes.RefreshToken);
  }

  private getTokenName(tokenType: TokenType): string {
    return tokenType === TokenTypes.AccessToken ? AuthService.accessTokenName : AuthService.refreshTokenName;
  }

  public getToken(tokenType: TokenType): JWTToken | RefreshToken {
    const tokenName: string = this.getTokenName(tokenType);

    const token = localStorage.getItem(tokenName);
    return token ? JSON.parse(token).token : null;
  }

  public setToken(tokenType: TokenType, token: JWTToken | RefreshToken): void {
    var d = new Date();
    d.setTime(d.getTime() + 30 * 60 * 1000); // set cookie to last 30 mins

    const tokenName: string = this.getTokenName(tokenType);

    localStorage.setItem(
      tokenName,
      JSON.stringify({
        token: token,
        expires: d,
      }),
    );
  }

  public removeToken(tokenType: TokenType): void {
    const tokenName: string = this.getTokenName(tokenType);
    localStorage.removeItem(tokenName);
  }

  isAuthenticated(): boolean {
    return this.getToken(TokenTypes.AccessToken) !== null;
  }
}
