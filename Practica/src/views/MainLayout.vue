<!--<template>
<div class="main-page">
    <SubHeader />
    <RouterView />
    <Footer />
</div>
</template>

<script setup>
import SubHeader from "../components/SubHeader.vue";
import Footer from "../components/FooTer.vue";
</script>

<style scoped>
.main-page {
display: flex;
flex-direction: column;
}
</style>
-->
<script setup>
import Footer from "../components/FooTer.vue";
import LeftMenu from "../components/LeftMenu.vue";
import Header from "../components/HeaderAll.vue";
</script>

<template>
  <div class="body_reg">
    <div class="form_con">
      <Header class="header_con" />
      <div class="menu_cont">
        <LeftMenu class="left_menu" />
        <div class="content_con">
          <router-view></router-view>
        </div>
      </div>
      <Footer class="footer_con" />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .form_con {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 80px, 1fr, 120px;
    overflow: auto;
  }

  .menu_cont {
    display: flex;
    flex: 1;
  }

  .header_con {
    grid-area: header;
    display: flex;
    border: 1px solid #ee5e30;
    height: 80px;
  }

  .left_menu {
    grid-area: left_menu;
    display: flex;
    border: 1px solid #ee5e30;
    width: 120px;
  }

  .content_con {
    grid-area: content_con;
    width: 100%;
  }

  .footer_con {
    grid-area: footer;
    display: flex;
    border: 1px solid #ee5e30;
    height: 80px;
  }
}

.body_reg {
  height: 100%;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
