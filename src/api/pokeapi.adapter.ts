import axios from "axios";

export interface httpAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeapiFetchAdapter implements httpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url).then((res) => res.json());
    return resp as T;
   }
}

export class PokeapiAdapter implements httpAdapter {
  private readonly axios = axios;
  constructor() {}

  async get<T>(url: string): Promise<T> {
   const { data } = await this.axios.get<T>(url);
   return data;
  }
  
  post(url: string, payload: any) {

  }

  pacth(url: string, data: any) {

  }

  delete(id: number) {
    
  }
}