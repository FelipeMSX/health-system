//@ts-ignore

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { JWTToken } from "../../modules/users/core/models/tokens";
import { IAuthService } from "../../modules/users/core/ports/i-auth-service";
import { LoginDTO } from "../../modules/users/dtos/login-dto";

export abstract class BaseAPI {
  //   private axiosInstance: AxiosInstance | any = null;
  private axiosInstance: AxiosInstance;

  public authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
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
      console.log("interceptors success handler");
      return response;
    };
  }

  private didAccessTokenExpire(response: AxiosError): boolean {
    console.log("Erro checagem de messagem: " + response.message);
    return response.message === "Token signature expired.";
  }

  private async regenerateAccessTokenFromRefreshToken(): Promise<JWTToken> {
    const response = await this.post<LoginDTO>("/users/token/refresh", {
      data: { refreshToken: this.authService.getToken("refresh-token") },
    });
    // const response = await axios({
    //   method: "POST",
    //   url: `${this.baseUrl}/users/token/refresh`,
    //   data: {
    //     refreshToken: this.authService.getToken("refresh-token"),
    //   },
    // });
    return response.data.accessToken;
  }

  private getErrorResponseHandler() {
    return async (error: any) => {
      console.log("Error intercepted");
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
      url: `${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
    });
  }

  protected post<T>(url: string, data?: any, params?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: "POST",
      url: `${url}`,
      data: data ? data : null,
      params: params ? params : null,
      headers: headers ? headers : null,
    });
  }
}
