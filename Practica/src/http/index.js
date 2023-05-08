// import Cookies from "js-cookie";
// // import { useRouter } from 'vue-router'

// const token = Cookies.get("token");
// // const router = useRouter()

// const baseURL =
//   process.env.VUE_APP_HTTP_S +
//   process.env.VUE_APP_BASE_URL +
//   process.env.VUE_APP_API_POSTFIX;

// const axios = require("axios").create({
//   baseURL: baseURL,
// });
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     console.log(error.response.status);
//     if (error.response.status === 401) {
//       this.router.push("/login");
//     }
//     return Promise.reject(error);
//   }
// );

// if (token) {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

// export default axios;
