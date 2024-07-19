import axios from "axios"; // ES Modules
// import vue from '@vitejs/plugin-vue'

export const requestInstance = axios.create({});

/**
 * requestInstance 实例全局请求扩展配置
 * 添加一个请求拦截器 （于transformRequest之前处理）
 */
const axiosRequest = {
  success: (config) => {
    return config;
  },
  error: (error) => Promise.reject(error),
};
/**
 * requestInstance 实例全局请求响应处理
 * 添加一个返回拦截器 （于transformResponse之后处理）
 * 返回的数据类型默认是json，若是其他类型（text）就会出现问题，因此用try,catch捕获异常
 */
const axiosResponse = {
  success: (response) => {
    return response;
  },
  error: (error) => {
    return Promise.reject({
      error_no: "-2",
      error_info: "请求超时",
    });
  },
};
requestInstance.interceptors.request.use(
  axiosRequest.success,
  axiosRequest.error
);
requestInstance.interceptors.response.use(
  axiosResponse.success,
  axiosResponse.error
);

/**
 * 基于axios ajax请求
 * @param url
 * @param method
 * @param timeout
 * @param prefix 用来拼接url地址
 * @param data
 * @param headers
 * @param dataType
 * @returns {Promise.<T>}
 */
export const request = (
  url,
  {
    method = "post",
    timeout = TIMEOUT,
    prefix = "",
    data = {},
    headers = {},
    dataType = "json",
  }
) => {
  console.log("data", data);
  const defaultConfig = {
    baseURL,
    url: formatURL(url, data),
    method,
    params: data,
    data,
    timeout,
    headers: headers,
    responseType: dataType,
    // 这里将 response.data 为 string 做了 JSON.parse 的转换处理
    transformResponse: axios.defaults.transformResponse.concat(function (data) {
      return data;
    }),
  };
  return requestInstance(defaultConfig);
};

export const getRequest = (url, params) => {
  const baseURL = 'http://127.0.0.1:5173/api'
  const fullUrl = `${baseURL}${url}`;
  return axios
    .get(fullUrl, { params })
    .then((response) => {
      console.log(response.data); // 请求成功，打印返回的数据
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error); // 打印错误信息
      Promise.reject(error);
    });
};

// Vue.prototype.$request = request;
// Vue.prototype.$getRequest = getRequest;
