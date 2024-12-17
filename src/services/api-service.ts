import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { ComplexObject } from 'types';
import { kookie } from 'services';

class ApiService {
  baseUrl: string;
  methods: Method[];
  token: string | null;
  post: Function;
  get: Function;
  put: Function;
  delete: Function;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.methods = ['get', 'post', 'put', 'delete'];
    this.methods.forEach((method) => (this[method] = this.createRequest.bind(this, method)));
  }

  protected createRequest(method: Method, api: string, options: AxiosRequestConfig = {}) {
    options.method = method;
    return this.request(api, options).then(this.handleStatus);
  }

  protected request(api: string, { data, ...options }: AxiosRequestConfig = {}) {
    const userToken = this.token || kookie.get('token');
    const reqOptions = options;
    reqOptions.headers = reqOptions?.headers || {};
    reqOptions.headers['Accept'] = 'application/json';
    reqOptions.headers['Content-Type'] = 'application/json';
    userToken ? (reqOptions.headers['Authorization'] = `bearer ${userToken}`) : null;

    const AXIOS_INSTANCE: AxiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: reqOptions.headers,
      validateStatus: () => true,
    });

    return AXIOS_INSTANCE[options.method](this.baseUrl + api, data || null);
  }

  protected handleStatus(res: any): object | Promise<ComplexObject> {
    if (res?.status >= 200 && res?.status < 300) return { res: res.data };
    return Promise.reject(res);
  }
}

export default new ApiService();
