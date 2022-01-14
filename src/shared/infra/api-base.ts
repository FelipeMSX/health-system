//@ts-ignore

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { JWTToken } from "../../modules/users/core/models/tokens";
import { IAuthService } from "../../modules/users/core/ports/i-auth-service";
import { LoginDTO } from "../../modules/users/dtos/login-dto";

export abstract class BaseAPI {
  //   private axiosInstance: AxiosInstance | any = null;
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  public authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
    this.baseURL = "http://localhost:3333/";
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3333/",
      headers: {
        "Content-type": "application/json",
      },
    });
    this.enableInterceptors();
  }

  protected enableInterceptors(): void {
    this.axiosInstance.interceptors.response.use(this.getSuccessResponseHandler(), this.getErrorResponseHandler());
  }

  private getSuccessResponseHandler() {
    return (response: any) => {
      return response;
    };
  }

  private didAccessTokenExpire(response: AxiosError): boolean {
    console.log("Erro checagem de messagem: " + response.message);
    console.log("Erro checagem de messagem JSON: " + JSON.stringify(response));

    return response.message === "O token de autenticação expirou.";
  }

  private async regenerateAccessTokenFromRefreshToken(): Promise<JWTToken> {
    const response = await this.post<LoginDTO>("/users/token/refresh", {
      data: { refreshToken: this.authService.getToken("refresh-token") },
    });
    return response.data.accessToken;
  }

  private getErrorResponseHandler() {
    return async (error: AxiosError) => {
      console.log(JSON.stringify(error.config));
      if (this.didAccessTokenExpire(error)) {
        const refreshToken = this.authService.getToken("refresh-token");
        const hasRefreshToken = !!refreshToken;

        if (hasRefreshToken) {
          try {
            // Get the new access token
            const accessToken = await this.regenerateAccessTokenFromRefreshToken();

            // Save token
            this.authService.setToken("access-token", accessToken);
            // Retry request
            error.config.headers["authorization"] = accessToken;
            return this.axiosInstance.request(error.config);
          } catch (err) {
            // remove access and refresh tokens
            this.authService.removeToken("access-token");
            this.authService.removeToken("refresh-token");
            console.log(err);
          }
        }
      }
      return Promise.reject({ ...error });
    };
  }

  protected get<T>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: "GET",
      url: `${this.baseURL}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
    });
  }

  protected post<T>(url: string, data?: any, params?: any, headers?: any): Promise<AxiosResponse<T>> {
    // return this.axiosInstance.post<T>(url, data ? data : null, headers ? { ...headers } : null);

    return this.axiosInstance({
      method: "POST",
      url: `${this.baseURL}${url}`,
      data: data ? data : {},
      params: params ? params : {},
      headers: headers ? headers : {},
    });
  }
}
