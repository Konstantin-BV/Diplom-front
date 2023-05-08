import axios from "@/http";

export default {
  login(form) {
    return axios.post("/auth/login", form);
  },
  register(form) {
    return axios.post("/auth/register", form);
  },
  recoverPassword(form) {
    return axios.post("/resetPassword ", form);
  },
};
