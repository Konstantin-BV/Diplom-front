<template>
  <div class="main_div">
    <div class="d_i_v">
      <img class="header__logo" src="../assets/12.svg" />
      <input v-model="name" class="inp" placeholder="Введите имя" />
      <input v-model="email" class="inp" placeholder="Введите почту" />
      <input v-model="password" class="inp" placeholder="Введите пароль" />
      <input
        v-model="password_two"
        class="inp"
        placeholder="Повторно введите пароль"
      />
      <button class="butt">Зарегистрироватся</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_two: "",
    },
  }),
  setup() {},
};
</script>

<style scoped>
.main_div {
  text-align: center;
  justify-content: center;
  padding: 200px;
}

.header__logo {
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 16px;
  height: 80px;
  cursor: pointer;
}

.d_i_v {
  width: 400px;
  background-color: #e6e6fa;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 4mm ridge rgb(255, 209, 220);
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
