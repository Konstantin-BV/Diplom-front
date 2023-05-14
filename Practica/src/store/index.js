import axios from "axios";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    Auth: true,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.Auth = false;
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8080/login",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8080/register",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
  },
  getters: {},
});
// Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     status: "",
//     token: localStorage.getItem("token") || "",
//     user: {},
//     Auth: true,
//   },
//   mutations: {
//     auth_request(state) {
//       state.status = "loading";
//     },
//     auth_success(state, token, user) {
//       state.status = "success";
//       state.token = token;
//       state.user = user;
//     },
//     auth_error(state) {
//       state.status = "error";
//     },
//     logout(state) {
//       state.status = "";
//       state.token = "";
//     },
//   },
//   actions: {
//     login({ commit }, user) {
//       return new Promise((resolve, reject) => {
//         commit("auth_request");
//         axios({
//           url: "http://localhost:3000/login",
//           data: user,
//           method: "POST",
//         })
//           .then((resp) => {
//             const token = resp.data.token;
//             const user = resp.data.user;
//             localStorage.setItem("token", token);
//             axios.defaults.headers.common["Authorization"] = token;
//             commit("auth_success", token, user);
//             resolve(resp);
//           })
//           .catch((err) => {
//             commit("auth_error");
//             localStorage.removeItem("token");
//             reject(err);
//           });
//       });
//     },
//     register({ commit }, user) {
//       return new Promise((resolve, reject) => {
//         commit("auth_request");
//         axios({
//           url: "http://localhost:3000/register",
//           data: user,
//           method: "POST",
//         })
//           .then((resp) => {
//             const token = resp.data.token;
//             const user = resp.data.user;
//             localStorage.setItem("token", token);
//             axios.defaults.headers.common["Authorization"] = token;
//             commit("auth_success", token, user);
//             resolve(resp);
//           })
//           .catch((err) => {
//             commit("auth_error", err);
//             localStorage.removeItem("token");
//             reject(err);
//           });
//       });
//     },
//   },
//   getters: {
//     isLoggedIn: true,
//     authStatus: true,
//   },

// });
