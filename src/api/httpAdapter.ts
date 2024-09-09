import axios, { AxiosInstance } from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class GithubUserApiAdapter implements HttpAdapter {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url);
      return data;
    } catch (error) {
      console.error("Error en GET:", error);
      throw error;
    }
  }
}

export const url = "https://api.github.com/users/";
export const githubUserFetch = new GithubUserApiAdapter(url);
