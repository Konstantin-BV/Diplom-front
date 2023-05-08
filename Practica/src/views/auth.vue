<template>
  <div class="h-100 w-100 row">
    <div class="d_i_v px-4 row gy-3 col-md-8 offset-md-2">
      <img class="header__logo" src="../assets/12.svg" />
      <div>
        <label for="inputEmail4" class="form-label">Имя пользователя</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите имя"
          v-model="name"
        />
      </div>
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
      <div>
        <label for="inputEmail4" class="form-label"
          >Повторно введите пароль</label
        >
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Повторно введите пароль"
          v-model="password_confirmation"
        />
      </div>
      <button class="butt btn btn-outline-dark btn-sm" @click="register">
        Зарегистрироватся
      </button>
    </div>
    <!-- <div
      class="container-fluid d-flex h-100 justify-content-center align-items-center p-0"
    >
      <div class="row bg-white shadow-sm">
        <div class="col border rounded p-4">
          <h3 class="text-center mb-4">Вход</h3>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Пароль</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Запомнить</label
              >
            </div>
            <button type="submit" class="btn btn-primary w-100">Войти</button>
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };
      this.$store
        .dispatch("register", data)
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
