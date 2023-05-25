import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  plugins: [createPersistedState()],
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    Company: {},
    Test: "qqq",
    Auth: true,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_name(state, user) {
      console.log(user);
      state.user = user;
    },
    auth_company(state, company, user, token) {
      state.status = "success";
      state.token = token;
      console.log(token);
      state.Company = company;
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
          url: "http://localhost:8080/api/login",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            const company = resp.data.user_object;
            commit("auth_company", company, user, token);
            console.log(user);
            console.log(company);
            commit("auth_success", token);
            commit("auth_name", user);
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
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
          url: "http://localhost:8080/api/registration",
          data: user,
          method: "POST",
          headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
          },
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            commit("auth_name", user);
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
    CreateTask({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url:
            import.meta.env.VITE_API_URL +
            "/companies/" +
            store.getters.getCompanyid +
            "/tasks",
          method: "POST",
          data: user,
          headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
          },
          params: {
            id: Number(store.getters.getCompanyid),
          },
        })
          .then((resp) => {
            console.log(resp);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    registerCompany({ commit }, Company) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: import.meta.env.VITE_API_URL + "/registration",
          data: Company,
          method: "POST",
        })
          .then((resp) => {
            resolve(resp);
            const token = resp.data.token;
            const Company = resp.data.user_object;
            const User = resp.data.user;
            commit("auth_name", User);
            localStorage.setItem("token", token);
            commit("auth_company", Company, User, token);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    GetDiportament({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url:
            import.meta.env.VITE_API_URL +
            "/companies/" +
            store.getters.getCompanyid +
            "/departments",
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
          },
          params: {
            id: Number(store.getters.getCompanyid),
          },
        })
          .then((resp) => {
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    GetDiportamentTree({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url:
            import.meta.env.VITE_API_URL +
            "/companies/" +
            store.getters.getCompanyid,
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
          },
          params: {
            id: Number(store.getters.getCompanyid),
          },
        })
          .then((resp) => {
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    CreateDiportament({ commit }, name_dip) {
      return new Promise((resolve, reject) => {
        axios({
          url:
            import.meta.env.VITE_API_URL +
            "/companies/" +
            store.getters.getCompanyid +
            "/departments",
          data: name_dip,
          method: "POST",
          headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
          },
          params: {
            id: Number(store.getters.getCompanyid),
          },
        })
          .then((resp) => {
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
  getters: {
    getCompanyid(state) {
      console.log(state.Company);
      return state.Company.id;
    },
    getToken(state) {
      console.log(state.token);
      return state.token;
    },
  },
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
