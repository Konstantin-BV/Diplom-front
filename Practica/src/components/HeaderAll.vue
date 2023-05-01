<template>
  <div class="header">
    <button class="header__logo">
      <img class="header__logo_item" src="../assets/12.svg" />
    </button>
    <div class="header__button">
      <router-link :to="'/'" class="header__button_registration">
        Зарегистрироваться
      </router-link>
      <router-link :to="'/'" class="header__button_enter"> Войти </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  background-color: #eae0c8;
  justify-content: space-between;
}
.header__button {
  display: flex;
  flex-direction: row;
}

.header__button_registration {
  display: flex;
  font-family: Bradley Hand, cursive;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  border-radius: 20px;
  background: #fee5ac;
  color: #5f9ea0;
  margin: 11px 16px;
  font: 20px sans-serif;
  font-weight: bold;
}

.name {
  text-align: center;
  margin: auto;
  font-family: Bradley Hand, cursive;
  font-size: 25px;
  flex-grow: 1;
}

.header__button_enter {
  display: flex;
  font-family: Bradley Hand, cursive;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 110px;
  height: 40px;
  border-radius: 20px;
  background: #fee5ac;
  color: #5f9ea0;
  margin: 11px 16px;
  font: 20px sans-serif;
  font-weight: bold;
}

.header__logo {
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.itg {
  height: 100%;
}

.header__logo_item {
  height: 80%;
}

.btn:hover {
  background-color: RoyalBlue;
}
</style>
