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
      <button class="butt btn btn-outline-dark btn-sm" @click="login">
        Войти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      let formdata = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", formdata)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
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
