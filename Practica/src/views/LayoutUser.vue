<script setup>
import Header from "../components/HeaderAll.vue";
import OneTask from "../components//one_task.vue";
</script>

<template>
  <div class="contener h-100">
    <div class="row row-cols-2 h-100 mycol myrow">
      <div
        class="col-2 h-100 mycol myrow"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(https://oir.mobi/uploads/posts/2021-03/1616971113_5-p-temnii-fon-dlya-rabochego-stola-6.jpg);
        "
      >
        <!-- <div v-for="(item, id) in children" v-bind="item" :key="id"> -->
        <div class="navbar-container h-100">
          <nav
            class="navbar navbar-expand-md navbar-light"
            style="align-items: center     align-items: center;
    display: flex;
    flex-direction: column;"
          >
            <a class="navbar-brand text-white" href="#" style="margin-right: 0"
              >Company Name</a
            >
            <div
              class="collapse navbar-collapse w-100 h-100"
              id="navbar"
              style="justify-content: center"
            >
              <!-- Пункты вертикального меню -->
              <ul
                class="navbar-nav row gy-3 w-100 h-100"
                style="
                  padding-top: 20px;
                  text-align: center;
                  text-align: -webkit-center;
                "
              >
                <div v-for="(item, id) in children" :key="id">
                  <li class="nav-item hov text-white" style="height: 5%">
                    <button
                      class="nav-link text-white h-100 text-a"
                      @click="OpenAsk(item)"
                    >
                      {{ item.name }}
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <!-- </div> -->
      </div>
      <div
        class="col-10 mycol myrow"
        style="overflow-x: hidden; overflow-y: hidden; height: 100%"
      >
        <div class="header_con mycol myrow"><Header /></div>
        <div
          class="content_con mycol myrow"
          style="overflow-x: hidden; overflow-y: auto; height: 100%"
        >
          <div class="overflow-hidden">
            <div>
              <div v-if="open" class="Main_class">
                <div
                  v-for="(item1, id) in form_item.children_item"
                  :key="id"
                  class="Main_div_con4"
                >
                  <div class="Main_class">
                    <div class="Main_div_con4">
                      <OneTask v-bind="item1" class="Main_div_con5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CenterMenu from "../components/CenterMenu.vue";
export default {
  data: () => ({
    open: false,
    form_item: {
      name_item: "dd",
      id_item: 1,
      children_item: [],
      statu: 1,
    },
    children: [
      {
        id: 1,
        name: "Sub Group1",
        statu: 1,
        children: [
          {
            id: 1,
            name: "aaa",
            main_text:
              "aaaaaaaaaaaaaaaassssssssssssssssssssssdddddddddddddddddddwwwwwwwwwwwwwdddddddddfffff",
            statu: 1,
          },
          {
            id: 2,
            name: "Subsub group5",
            main_text:
              "bbbbbbbbbffffffffffffsssssssqqqqqqq ssssssssssss dddddddddddd wwwwwwwwwwww eeeeeeeee",
            statu: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Sub Group2",
        children: [
          {
            id: 1,
            name: "aaa",
            main_text:
              "cccccccccccccccccccfsssssssss wwwwwwwww qqqqqqqqqq rrrrrrrrrrrr aaaaaaaaaa dddddddddd",
            statu: 1,
          },
          {
            id: 2,
            name: "Subsub group5",
            main_text:
              "bbbbbbbbbffffffffffffsssssssqqqqqqq ssssssssssss dddddddddddd wwwwwwwwwwww eeeeeeeee",
            statu: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Sub Group3",
        children: [
          {
            id: 1,
            name: "aaa",
            main_text:
              "cccccccccccccccccccfsssssssss wwwwwwwww qqqqqqqqqq rrrrrrrrrrrr aaaaaaaaaa dddddddddd",
            statu: 1,
          },
          {
            id: 2,
            name: "Subsub group5",
            main_text:
              "bbbbbbbbbffffffffffffsssssssqqqqqqq ssssssssssss dddddddddddd wwwwwwwwwwww eeeeeeeee",
            statu: 1,
          },
        ],
      },
      {
        id: 4,
        name: "Sub Group4",
        children: [
          {
            id: 1,
            name: "aaa",
            main_text:
              "cccccccccccccccccccfsssssssss wwwwwwwww qqqqqqqqqq rrrrrrrrrrrr aaaaaaaaaa dddddddddd",
            statu: 1,
          },
          {
            id: 2,
            name: "Subsub group5",
            main_text:
              "bbbbbbbbbffffffffffffsssssssqqqqqqq ssssssssssss dddddddddddd wwwwwwwwwwww eeeeeeeee",
            statu: 1,
          },
        ],
      },
    ],
  }),
  methods: {
    OpenAsk(data) {
      (this.open = !this.open),
        (this.form_item.name_item = data.name),
        (this.form_item.id_item = data.id),
        (this.form_item.children_item = data.children),
        (this.form_item.statu = data.statu),
        console.log(data);
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .menu_cont {
    display: flex;
    flex: 1;
  }

  .Main_class {
    display: flex;
    flex-direction: column;
    justify-self: start;
    width: 96%;
  }

  .Main_div_con5 {
    display: flex;
    justify-self: start;
    flex-direction: column;
    margin: 30px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }

  .Main_div_conn2 {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 30px;
    border: 1px solid black;
    height: 700px;
  }

  .Main_div_con4 {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .header_con {
    grid-area: header;
    display: flex;
    border: 1px solid #b6b6b6;
    height: 80px;
  }

  .left_menu {
    grid-area: left_menu;
    display: flex;
    width: 120px;
  }

  .sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 260px;
    display: block;
    z-index: 1;
    color: #fff;
    font-weight: 200;
    background-size: cover;
    background-position: 50%;
  }

  .sidebar:before {
    opacity: 0.33;
    background: #000;
  }

  .myrow {
    margin-left: 0;
    margin-top: 0;
    margin-right: 0;
  }
  .mycol {
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
  }

  .content_con {
    grid-area: content_con;
    width: 100%;
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
