<template>
  <div class="h-100 w-100 row">
    <div class="d_i_v px-4 row gy-3 col-md-8 offset-md-2">
      <img class="header__logo" src="../assets/12.svg" />
      <div>
        <label for="inputEmail4" class="form-label">Эл. адрес</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите почту"
          v-model="email"
        />
      </div>
      <div>
        <label for="inputEmail4" class="form-label">Введите пароль</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите пароль"
          v-model="password"
        />
      </div>
      <button class="butt btn btn-outline-dark btn-sm">Войти</button>
    </div>
  </div>
</template>

<script>
// import api from "@/api";
// import { reactive } from "vue";
// export default {
//   setup() {
//     const form = reactive({
//       name: "",
//       email: "",
//       password: "",
//       password_two: "",
//     });

//     const submit = () => {
//       api.auth.login(form).then((response) => {
//         console.log(response.data);
//       });
//     };

//     return {
//       form,
//       submit,
//     };
//   },
// };
</script>

<style scoped>
.header__logo {
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 16px;
  height: 80px;
  cursor: pointer;
}

.d_i_v {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 15px;
}

.inp {
  width: 300px;
  align-self: center;
  margin-top: 30px;
  height: 30px;
}

.butt {
  width: 300px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 30px;
}
</style>
