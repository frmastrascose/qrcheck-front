import axios from "axios";

const url = "http://demo4135447.mockable.io/qr-check";

const Api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status || 500;
    if (status === 401) {
      window.location.href = "/";
    } else {
      return Promise.reject(error);
    }
  }
);

export default Api;
