<template>
  <div class="h-100 w-100 row">
    <div class="d_i_v px-4 row gy-3 col-md-8 offset-md-2">
      <img class="header__logo" src="../assets/12.svg" />
      <div>
        <label for="inputEmail4" class="form-label">Ваше ФИО</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите имя"
          v-model="name"
        />
      </div>
      <div>
        <label for="inputEmail4" class="form-label">Ваш Эл. адрес</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите почту"
          v-model="email_user"
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
      <div>
        <label for="inputEmail4" class="form-label">Имя компании</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="Введите имя"
          v-model="title"
        />
        <label for="inputEmail4" class="form-label"
          >Электронный адресс компании</label
        >
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="Введите имя"
          v-model="email"
        />
      </div>
      <div>
        <label for="inputEmail4" class="form-label">Адресс</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="Введите почту"
          v-model="address"
        />
      </div>
      <div>
        <label for="inputEmail4" class="form-label">Телефон</label>
        <input
          type="Number"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите почту"
          v-model="phone"
        />
      </div>
      <button class="butt btn btn-outline-dark btn-sm" @click="register">
        Зарегистрироватся
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      name: "",
      email: "",
      address: "",
      phone: 0,
      password: "",
      password_confirmation: "",
      email_user: "",
    };
  },
  methods: {
    register: function () {
      console.log(import.meta.env.VITE_API_URL);
      let data = {
        name: this.name,
        email: this.email_user,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role_id: 3,
        title: this.title,
        company_address: this.address,
        company_phone: this.phone,
        company_email: this.email,
      };
      console.log(data);
      this.$store

        // eslint-disable-next-line prettier/prettier
        .dispatch("registerCompany", data)
        .then(() => this.$router.push("/homecompany"))
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
