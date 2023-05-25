<template>
  <div class="h-100 w-100 row">
    <div class="d_i_v">
      <img class="header__logo" src="../assets/12.svg" />
      <div>
        <label for="inputEmail4" class="form-label">Имя сотрудника</label>
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

      <div class="dropdown" style="margin-right: 10px">
        <button
          class="btn btn-outline-dark btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Отделы
        </button>
        <div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <div v-for="(item1, id) in children" :key="id">
                <div
                  class="info_chexkbox"
                  v-for="(item, id) in item1"
                  :key="id"
                >
                  <input
                    type="checkbox"
                    id="item.id"
                    v-bind:value="item.id"
                    v-model="department_id"
                  />
                  <label for="item.id"> {{ item.title }} </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <button class="butt btn btn-outline-dark btn-sm" @click="register">
        Зарегистрироватся
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    name_item: {
      type: String,
      default: null,
    },
    children_item: {
      type: Array,
      default: null,
      required: true,
    },

    id_item: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      id: "",
      role_id: 2,
      department_id: [],
      children: [],
    };
  },
  beforeCreate: function () {
    this.$store
      .dispatch("GetDiportamentTree")
      .then((resp) => ((this.children = resp.data), console.log(resp)))
      .catch((err) => console.log(err));
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role_id: 2,
        department_id: this.department_id,
      };
      console.log()
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
  font-size: 16px;
  height: 80px;
  cursor: pointer;
}

.d_i_v {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-left: 15px;
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
