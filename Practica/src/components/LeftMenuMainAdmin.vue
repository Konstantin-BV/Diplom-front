<script setup>
import { store } from "../store/index.js";
</script>

<template>
  <div class="navbar-container h-100">
    <nav
      class="navbar navbar-expand-md navbar-light"
      style="align-items: center"
    >
      <a class="navbar-brand text-white" href="#" style="margin-right: 0">
        {{ store.state.Company.title }}</a
      >
      <div
        class="collapse navbar-collapse w-100 h-100"
        id="navbar"
        style="justify-content: center"
      >
        <!-- Пункты вертикального меню -->
        <ul
          class="navbar-nav row gy-3 w-100 h-100"
          style="padding-top: 20px; text-align: center; align-content: center"
        >
          <li class="nav-item hov text-white" style="height: 10%">
            <router-link
              :to="'/homecompany'"
              class="nav-link text-white h-100 text-a"
              >Создание отделов</router-link
            >
          </li>
          <li class="nav-item mycol hov text-white" style="height: 10%">
            <router-link
              :to="'/registeradmin'"
              class="text-white nav-link text-a"
              >Ренистрация администраторов</router-link
            >
          </li>
          <li class="nav-item mycol hov text-white" style="height: 10%">
            <router-link :to="'/'" class="text-white nav-link text-a"
              >Профель</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .text-a {
    line-height: 31px;
    font-size: 17px;
    font-weight: 600;
  }
  .hov {
    border-radius: 15px;
    width: 70%;
    align-content: center;
  }

  .hov:hover {
    background-color: rgba(255, 255, 255, 0.053);
    height: 100%;
    top: 0;
    left: 0;
  }

  .mycol {
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
  }

  .navbar-container {
    position: sticky;
    top: 0;
    overflow-y: auto;
    max-height: 100%;
  }
  .navbar-container .navbar {
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    height: 100%;
  }
  .navbar-container .navbar-collapse {
    align-items: flex-start;
  }
  .navbar-container .nav {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .navbar-container .navbar-nav {
    flex-direction: column !important;
  }
}
</style>